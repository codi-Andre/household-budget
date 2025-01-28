import { Education } from "./education"
import { Food } from "./food"
import { HealthAndBeauty } from "./health-and-beauty"
import { House } from "./house"
import { Investment } from "./investment"
import { Revenue } from "./revenue"
import { Transport } from "./transport"

type State = Revenue &
  Investment &
  House &
  Food &
  HealthAndBeauty &
  Transport &
  Education

type Action = {
  expenses: () => number
  balance: () => number
  reset: () => void
  saveToLocalStorage: () => void
}

export type HouseholdBudget = State & Action
