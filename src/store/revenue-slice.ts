import { StateCreator } from "zustand"
import { Revenue } from "@/models/revenue"
import { getInitialStateFromLocalStorage } from "@/utils/get-initial-state-from-local-storage"

const LOCAL_STORAGE_KEY = "budget@revenue:0.1"
const initialState = {
  salary: 0,
  otherRevenues: 0,
}

export const createRevenueSlice: StateCreator<Revenue, [], [], Revenue> = (
  set,
  get
) => ({
  ...getInitialStateFromLocalStorage<typeof initialState>(
    initialState,
    "budget@revenue:0.1"
  ),
  revenueTotal: () => get().salary + get().otherRevenues,
  setRevenue: (field, amount) => set({ [field]: amount }),
  clearRevenue: () => set(initialState),
  saveRevenue: () => {
    const state = {
      salary: get().salary,
      otherRevenues: get().otherRevenues,
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
  },
})
