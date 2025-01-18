import { StateCreator } from "zustand"
import { Revenue } from "@/models/revenue"

export const createRevenueSlice: StateCreator<Revenue> = (set, get) => ({
  salary: 0,
  otherRevenues: 0,
  setSalary: (amount: number) => set({ salary: amount }),
  setOtherRevenues: (amount: number) => set({ otherRevenues: amount }),
  revenueTotal: () => get().salary + get().otherRevenues,
})
