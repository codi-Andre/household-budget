import { Food } from "@/models/food"
import { StateCreator } from "zustand"

export const createFoodSlice: StateCreator<Food> = (set, get) => ({
  groceries: 0,
  awayFromHome: 0,
  otherFoodExpenses: 0,
  foodTotal: () =>
    get().groceries + get().awayFromHome + get().otherFoodExpenses,
  setFood: (field, amount) => set({ [field]: amount }),
})
