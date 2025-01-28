import { StateCreator } from "zustand"
import { Investment } from "@/models/investment"
import { getInitialStateFromLocalStorage } from "@/utils/get-initial-state-from-local-storage"

const LOCAL_STORAGE_KEY = "budget@investment:0.1"
const initialState = {
  investment: 0,
}

export const createInvestmentSlice: StateCreator<
  Investment,
  [],
  [],
  Investment
> = (set, get) => ({
  ...getInitialStateFromLocalStorage<typeof initialState>(
    initialState,
    LOCAL_STORAGE_KEY
  ),
  investmentTotal: () => get().investment,
  setInvestment: (field, amount) => set({ [field]: amount }),
  clearInvestment: () => set(initialState),
  saveInvestment: () => {
    const state = {
      investment: get().investment,
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
  },
})
