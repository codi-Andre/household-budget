import { useHouseholdBudget } from "@/store/use-household-budget"
import { Cell, Pie, PieChart, ResponsiveContainer, Sector } from "recharts"
import { useShallow } from "zustand/shallow"
import { formatCurrency } from "@/utils/format-currency"
import { Link } from "@tanstack/react-router"

import styles from "./charts.module.css"
import { useState } from "react"

const COLORS = [
  "#0ea5e9",
  "#8b5cf6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#f43f5e",
]

/* eslint-disable */
const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
  } = props

  return (
    <g>
      <text x={cx} y={cy} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <text x={cx} y={cy} dy={28} textAnchor="middle" fill={fill}>
        {formatCurrency(value)}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  )
}
/* eslint-enable */

export function Charts() {
  const [food, house, education, transport, healthAndBeauty] =
    useHouseholdBudget(
      useShallow((state) => [
        state.foodTotal,
        state.houseTotal,
        state.educationTotal,
        state.transportTotal,
        state.healthAndBeautyTotal,
      ])
    )
  const [revenue, investment, expenses] = useHouseholdBudget(
    useShallow((state) => [
      state.revenueTotal,
      state.investmentTotal,
      state.expenses,
    ])
  )

  const fields = [
    { name: "Comida", value: food() },
    { name: "Casa", value: house() },
    { name: "Educação", value: education() },
    { name: "Transporte", value: transport() },
    { name: "Beleza e saúde", value: healthAndBeauty() },
  ]

  const areas = [
    { name: "Renda", value: revenue() },
    { name: "Investimentos", value: investment() },
    { name: "Gastos", value: expenses() },
  ]

  const [fieldsActiveIndex, setFieldsActiveIndex] = useState(1)
  const [areasActiveIndex, setAreasActiveIndex] = useState(2)

  return (
    <>
      <header className={`container ${styles.header}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        <Link className={styles.link} to="/">
          Voltar
        </Link>
      </header>

      <main className={styles.main}>
        {expenses() > 0 || revenue() > 0 || investment() > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                activeShape={renderActiveShape}
                activeIndex={fieldsActiveIndex}
                onMouseEnter={(_, index) => setFieldsActiveIndex(index)}
                data={fields}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="160"
                outerRadius={144}
                innerRadius={100}
                strokeWidth={2}
                fill={COLORS[6]}
                labelLine={false}
              >
                {fields.map((_, index) => {
                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      className={styles.cell}
                    />
                  )
                })}
              </Pie>

              <Pie
                activeShape={renderActiveShape}
                activeIndex={areasActiveIndex}
                onMouseEnter={(_, index) => setAreasActiveIndex(index)}
                data={areas}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="510"
                outerRadius={144}
                innerRadius={100}
                strokeWidth={2}
                fill={COLORS[6]}
                labelLine={false}
              >
                {areas.map((_, index) => {
                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      className={styles.cell}
                    />
                  )
                })}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <p className={styles.empty}>
            Parece que você ainda não preencheu o orçamento :(
          </p>
        )}
      </main>
    </>
  )
}
