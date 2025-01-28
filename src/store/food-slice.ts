import { Food } from "@/models/food"
import { getInitialStateFromLocalStorage } from "@/utils/get-initial-state-from-local-storage"
import { StateCreator } from "zustand"

const LOCAL_STORAGE_KEY = "budget:food@0.1"
const initialState = {
  groceries: 0,
  awayFromHome: 0,
  otherFoodExpenses: 0,
}

export const createFoodSlice: StateCreator<Food, [], [], Food> = (
  set,
  get
) => ({
  ...getInitialStateFromLocalStorage<typeof initialState>(
    initialState,
    LOCAL_STORAGE_KEY
  ),
  foodTotal: () =>
    get().groceries + get().awayFromHome + get().otherFoodExpenses,
  setFood: (field, amount) => set({ [field]: amount }),
  clearFood: () => set(initialState),
  saveFood: () => {
    const state = {
      groceries: get().groceries,
      awayFromHome: get().awayFromHome,
      otherFoodExpenses: get().otherFoodExpenses,
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
  },
})
