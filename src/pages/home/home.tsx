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
    setHouse,
    rent,
    houseTaxes,
    condominiumFee,
    water,
    energy,
    houseGas,
    tv,
    internet,
    cellphone,
    cleaningServicesAndProducts,
    babySitter,
    otherHouseExpenses,
    houseTotal,
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

        <BudgetSection title="Casa" total={formatCurrency(houseTotal())}>
          <CurrencyInput
            label="aluguel"
            value={rent}
            setValue={(amount) => setHouse("rent", amount)}
          />

          <CurrencyInput
            label="impostos"
            value={houseTaxes}
            setValue={(amount) => setHouse("houseTaxes", amount)}
          />

          <CurrencyInput
            label="condomínio"
            value={condominiumFee}
            setValue={(amount) => setHouse("condominiumFee", amount)}
          />

          <CurrencyInput
            label="água"
            value={water}
            setValue={(amount) => setHouse("water", amount)}
          />

          <CurrencyInput
            label="luz"
            value={energy}
            setValue={(amount) => setHouse("energy", amount)}
          />

          <CurrencyInput
            label="gás"
            value={houseGas}
            setValue={(amount) => setHouse("houseGas", amount)}
          />

          <CurrencyInput
            label="TV"
            value={tv}
            setValue={(amount) => setHouse("tv", amount)}
          />

          <CurrencyInput
            label="internet"
            value={internet}
            setValue={(amount) => setHouse("internet", amount)}
          />

          <CurrencyInput
            label="celular"
            value={cellphone}
            setValue={(amount) => setHouse("cellphone", amount)}
          />

          <CurrencyInput
            label="serviços e produtos de limpeza"
            value={cleaningServicesAndProducts}
            setValue={(amount) =>
              setHouse("cleaningServicesAndProducts", amount)
            }
          />

          <CurrencyInput
            label="babá"
            value={babySitter}
            setValue={(amount) => setHouse("babySitter", amount)}
          />

          <CurrencyInput
            label="outras despesas"
            value={otherHouseExpenses}
            setValue={(amount) => setHouse("otherHouseExpenses", amount)}
          />
        </BudgetSection>
      </main>
    </>
  )
}
