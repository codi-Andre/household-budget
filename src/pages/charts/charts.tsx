import { useHouseholdBudget } from "@/store/use-household-budget"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import { useShallow } from "zustand/shallow"
import { formatCurrency } from "@/utils/format-currency"
import { Link } from "@tanstack/react-router"

import styles from "./charts.module.css"

const COLORS = [
  "#0ea5e9",
  "#8b5cf6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#f43f5e",
]

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
            <PieChart style={{ fontSize: 14 }}>
              <Pie
                data={fields}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="128"
                outerRadius={128}
                strokeWidth={2}
                fill={COLORS[6]}
                filter="#fff"
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  index,
                }: Record<string, number>) => {
                  const RADIAN = Math.PI / 180
                  const radius = innerRadius + (outerRadius - innerRadius) * 0.6
                  const x = cx + radius * Math.cos(-midAngle * RADIAN)
                  const y = cy + radius * Math.sin(-midAngle * RADIAN)

                  return value > 0 ? (
                    <text
                      x={x}
                      y={y}
                      className={styles.label}
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="central"
                    >
                      <tspan>{fields[index].name}</tspan>{" "}
                      <tspan x={x} y={y + 15}>
                        ({formatCurrency(value)})
                      </tspan>
                    </text>
                  ) : null
                }}
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
                data={areas}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="460"
                outerRadius={128}
                innerRadius={64}
                strokeWidth={2}
                fill={COLORS[6]}
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  index,
                }: Record<string, number>) => {
                  const RADIAN = Math.PI / 180
                  const radius = innerRadius + (outerRadius - innerRadius) * 0.3
                  const x = cx + radius * Math.cos(-midAngle * RADIAN)
                  const y = cy + radius * Math.sin(-midAngle * RADIAN)

                  return value > 0 ? (
                    <text
                      x={x}
                      y={y}
                      className={styles.label}
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="central"
                    >
                      <tspan>{areas[index].name}</tspan>{" "}
                      <tspan x={x} y={y + 15}>
                        ({formatCurrency(value)})
                      </tspan>
                    </text>
                  ) : null
                }}
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
