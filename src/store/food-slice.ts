import { Food } from "@/models/food"
import { StateCreator } from "zustand"

export const createFoodSlice: StateCreator<Food> = (set, get) => ({
  groceries: 0,
  awayFromHome: 0,
  otherFoodExpenses: 0,
  foodComplementary: 0,
  setGroceries: (amount: number) => set({ groceries: amount }),
  setAwayFromHome: (amount: number) => set({ awayFromHome: amount }),
  setOtherFoodExpenses: (amount: number) => set({ otherFoodExpenses: amount }),
  setFoodComplementary: (amount: number) => set({ foodComplementary: amount }),
  total: () =>
    get().groceries +
    get().awayFromHome +
    get().otherFoodExpenses +
    get().foodComplementary,
})
