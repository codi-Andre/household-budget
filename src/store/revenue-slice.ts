import { StateCreator } from "zustand"
import { Revenue } from "@/models/revenue"

export const createRevenueSlice: StateCreator<Revenue> = (set, get) => ({
  salary: 0,
  otherRevenues: 0,
  revenueTotal: () => get().salary + get().otherRevenues,
  setRevenue: (field, amount) => set({ [field]: amount }),
})
