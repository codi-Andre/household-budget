import { useHouseholdBudget } from "@/store/use-household-budget"
import { BudgetSection } from "./budget-section/budget-section"
import { CurrencyInput } from "@/components/ui/currency-input/currency-input"
import { formatCurrency } from "@/utils/format-currency"

export function Home() {
  const {
    setRevenue,
    salary,
    otherRevenues,
    revenueTotal,
    setInvestment,
    investment,
    investmentTotal,
  } = useHouseholdBudget()

  return (
    <>
      <header className="container">
        <h1>Gastos Domésticos</h1>
      </header>

      <main className="container">
        <BudgetSection title="Receita" total={formatCurrency(revenueTotal())}>
          <CurrencyInput
            label="salario"
            value={salary}
            setValue={(amount) => setRevenue("salary", amount)}
          />

          <CurrencyInput
            label="outros rendimentos"
            value={otherRevenues}
            setValue={(amount) => setRevenue("otherRevenues", amount)}
          />
        </BudgetSection>

        <BudgetSection
          title="investimento"
          total={formatCurrency(investmentTotal())}
        >
          <CurrencyInput
            label="investimento"
            value={investment}
            setValue={(amount) => setInvestment("investment", amount)}
          />
        </BudgetSection>
      </main>
    </>
  )
}
