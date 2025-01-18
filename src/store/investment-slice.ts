import { StateCreator } from "zustand"
import { Investment } from "@/models/investment"

export const createInvestmentSlice: StateCreator<Investment> = (set, get) => ({
  investment: 0,
  setInvestment: (amount: number) => set({ investment: amount }),
  investmentTotal: () => get().investment,
})
