import { HouseholdBudget } from "@/models/household-budget"
import { StateCreator } from "zustand"

export const createSummarySlice: StateCreator<
  HouseholdBudget,
  [],
  [],
  Pick<HouseholdBudget, "expenses" | "balance">
> = (_, get) => ({
  expenses: () =>
    get().foodTotal() +
    get().houseTotal() +
    get().educationTotal() +
    get().transportTotal() +
    get().healthAndBeautyTotal(),
  balance: () =>
    get().revenueTotal() - get().investmentTotal() - get().expenses(),
})
