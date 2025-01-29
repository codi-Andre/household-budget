import styles from "./home.module.css"
import { useHouseholdBudget } from "@/store/use-household-budget"
import { BudgetSection } from "./budget-section/budget-section"
import { CurrencyInput } from "@/components/ui/currency-input/currency-input"
import { formatCurrency } from "@/utils/format-currency"
import { Button } from "@/components/ui/button/button"
import { toast } from "sonner"

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
    setFood,
    groceries,
    awayFromHome,
    otherFoodExpenses,
    foodTotal,
    setHealthAndBeauty,
    medicine,
    healthPlan,
    doctorsAndPsychologists,
    hygieneProducts,
    gym,
    salon,
    otherHealthAndBeautyExpenses,
    healthAndBeautyTotal,
    setTransport,
    subway,
    bus,
    transportGas,
    parking,
    carMaintenance,
    insurance,
    transportTaxes,
    otherTransportExpenses,
    transportTotal,
    setEducation,
    schoolUniform,
    schoolSupplies,
    books,
    courses,
    college,
    otherEducationExpenses,
    educationTotal,
    expenses,
    balance,
    reset,
    saveToLocalStorage,
  } = useHouseholdBudget()

  return (
    <>
      <header className="container">
        <h1 className={styles.title}>Gastos Domésticos</h1>
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

        <BudgetSection title="alimentação" total={formatCurrency(foodTotal())}>
          <CurrencyInput
            label="mercado"
            value={groceries}
            setValue={(amount) => setFood("groceries", amount)}
          />

          <CurrencyInput
            label="fora de casa"
            value={awayFromHome}
            setValue={(amount) => setFood("awayFromHome", amount)}
          />

          <CurrencyInput
            label="outras despesas"
            value={otherFoodExpenses}
            setValue={(amount) => setFood("otherFoodExpenses", amount)}
          />
        </BudgetSection>

        <BudgetSection
          title="beleza e saúde"
          total={formatCurrency(healthAndBeautyTotal())}
        >
          <CurrencyInput
            label="remédios"
            value={medicine}
            setValue={(amount) => setHealthAndBeauty("medicine", amount)}
          />

          <CurrencyInput
            label="plano de saúde"
            value={healthPlan}
            setValue={(amount) => setHealthAndBeauty("healthPlan", amount)}
          />

          <CurrencyInput
            label="médicos e e psicólogos"
            value={doctorsAndPsychologists}
            setValue={(amount) =>
              setHealthAndBeauty("doctorsAndPsychologists", amount)
            }
          />

          <CurrencyInput
            label="produtos de higiene pessoal"
            value={hygieneProducts}
            setValue={(amount) => setHealthAndBeauty("hygieneProducts", amount)}
          />

          <CurrencyInput
            label="academia"
            value={gym}
            setValue={(amount) => setHealthAndBeauty("gym", amount)}
          />

          <CurrencyInput
            label="Salão de beleza e/ou barbearia"
            value={salon}
            setValue={(amount) => setHealthAndBeauty("salon", amount)}
          />

          <CurrencyInput
            label="outras despesas"
            value={otherHealthAndBeautyExpenses}
            setValue={(amount) =>
              setHealthAndBeauty("otherHealthAndBeautyExpenses", amount)
            }
          />
        </BudgetSection>

        <BudgetSection
          title="Transporte"
          total={formatCurrency(transportTotal())}
        >
          <CurrencyInput
            label="metrô"
            value={subway}
            setValue={(amount) => setTransport("subway", amount)}
          />

          <CurrencyInput
            label="ônibus"
            value={bus}
            setValue={(amount) => setTransport("bus", amount)}
          />

          <CurrencyInput
            label="gasolina"
            value={transportGas}
            setValue={(amount) => setTransport("transportGas", amount)}
          />

          <CurrencyInput
            label="estacionamento"
            value={parking}
            setValue={(amount) => setTransport("parking", amount)}
          />

          <CurrencyInput
            label="manutenção do carro"
            value={carMaintenance}
            setValue={(amount) => setTransport("carMaintenance", amount)}
          />

          <CurrencyInput
            label="seguro"
            value={insurance}
            setValue={(amount) => setTransport("insurance", amount)}
          />

          <CurrencyInput
            label="impostos"
            value={transportTaxes}
            setValue={(amount) => setTransport("transportTaxes", amount)}
          />

          <CurrencyInput
            label="outras despesas"
            value={otherTransportExpenses}
            setValue={(amount) =>
              setTransport("otherTransportExpenses", amount)
            }
          />
        </BudgetSection>

        <BudgetSection
          title="educação"
          total={formatCurrency(educationTotal())}
        >
          <CurrencyInput
            label="uniforme escolar"
            value={schoolUniform}
            setValue={(amount) => setEducation("schoolUniform", amount)}
          />

          <CurrencyInput
            label="material escolar"
            value={schoolSupplies}
            setValue={(amount) => setEducation("schoolSupplies", amount)}
          />

          <CurrencyInput
            label="livros"
            value={books}
            setValue={(amount) => setEducation("books", amount)}
          />

          <CurrencyInput
            label="cursos avulsos (inglês, esportes, etc)"
            value={courses}
            setValue={(amount) => setEducation("courses", amount)}
          />

          <CurrencyInput
            label="faculdade"
            value={college}
            setValue={(amount) => setEducation("college", amount)}
          />

          <CurrencyInput
            label="outras despesas"
            value={otherEducationExpenses}
            setValue={(amount) =>
              setEducation("otherEducationExpenses", amount)
            }
          />
        </BudgetSection>
      </main>

      <footer className="container">
        <h2 className={styles.summary}>Resumo</h2>

        <p className={styles.tuple}>
          Receitas <span>{formatCurrency(revenueTotal())}</span>
        </p>
        <p className={styles.tuple}>
          Gastos <span>{formatCurrency(expenses())}</span>
        </p>
        <p className={styles.tuple}>
          Investimentos <span>{formatCurrency(investmentTotal())}</span>
        </p>
        <strong>
          <p className={styles.tuple}>
            Saldo <span>{formatCurrency(balance())}</span>
          </p>
        </strong>

        <div className={styles.panel}>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              reset()
              toast.warning("Todos os campos foram limpos")
            }}
          >
            limpar
          </Button>

          <Button
            size="lg"
            onClick={() => {
              saveToLocalStorage()
              toast.success("Orçamento salvo no armazenamento local")
            }}
          >
            Salvar
          </Button>
        </div>
      </footer>
    </>
  )
}
