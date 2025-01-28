import { HealthAndBeauty } from "@/models/health-and-beauty"
import { getInitialStateFromLocalStorage } from "@/utils/get-initial-state-from-local-storage"
import { StateCreator } from "zustand"

const LOCAL_STORAGE_KEY = "budget@healthAndBeauty:0.1"
const initialState = {
  medicine: 0,
  healthPlan: 0,
  doctorsAndPsychologists: 0,
  hygieneProducts: 0,
  gym: 0,
  salon: 0,
  otherHealthAndBeautyExpenses: 0,
}

export const createHealthAndBeautySlice: StateCreator<
  HealthAndBeauty,
  [],
  [],
  HealthAndBeauty
> = (set, get) => ({
  ...getInitialStateFromLocalStorage<typeof initialState>(
    initialState,
    LOCAL_STORAGE_KEY
  ),
  healthAndBeautyTotal: () =>
    get().healthPlan +
    get().doctorsAndPsychologists +
    get().medicine +
    get().hygieneProducts +
    get().gym +
    get().salon +
    get().otherHealthAndBeautyExpenses,
  setHealthAndBeauty: (field, amount) => set({ [field]: amount }),
  clearHealthAndBeauty: () => set(initialState),
  saveHealthAndBeauty: () => {
    const state = {
      medicine: get().medicine,
      healthPlan: get().healthPlan,
      doctorsAndPsychologists: get().doctorsAndPsychologists,
      hygieneProducts: get().hygieneProducts,
      gym: get().gym,
      salon: get().salon,
      otherHealthAndBeautyExpenses: get().otherHealthAndBeautyExpenses,
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
  },
})
