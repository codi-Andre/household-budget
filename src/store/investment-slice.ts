import { StateCreator } from "zustand"
import { Investment } from "@/models/investment"

export const createInvestmentSlice: StateCreator<
  Investment,
  [],
  [],
  Investment
> = (set, get) => ({
  investment: 0,
  investmentTotal: () => get().investment,
  setInvestment: (field, amount) => set({ [field]: amount }),
})
