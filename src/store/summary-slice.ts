import { HouseholdBudget } from "@/models/household-budget"
import { StateCreator } from "zustand"

export const createSummarySlice: StateCreator<
  HouseholdBudget,
  [],
  [],
  Pick<HouseholdBudget, "expenses" | "balance" | "reset" | "saveToLocalStorage">
> = (_, get) => ({
  expenses: () =>
    get().foodTotal() +
    get().houseTotal() +
    get().educationTotal() +
    get().transportTotal() +
    get().healthAndBeautyTotal(),
  balance: () =>
    get().revenueTotal() - get().investmentTotal() - get().expenses(),
  reset: () => {
    get().clearEducation()
    get().clearFood()
    get().clearHealthAndBeauty()
    get().clearHouse()
    get().clearInvestment()
    get().clearRevenue()
    get().clearTransport()
  },
  saveToLocalStorage: () => {
    get().saveEducation()
    get().saveFood()
    get().saveHealthAndBeauty()
    get().saveHouse()
    get().saveInvestment()
    get().saveRevenue()
    get().saveTransport()
  },
})
