import { HealthAndBeauty } from "@/models/health-and-beauty"
import { StateCreator } from "zustand"

export const createHealthAndBeautySlice: StateCreator<
  HealthAndBeauty,
  [],
  [],
  HealthAndBeauty
> = (set, get) => ({
  medicine: 0,
  healthPlan: 0,
  doctorsAndPsychologists: 0,
  hygieneProducts: 0,
  gym: 0,
  salon: 0,
  otherHealthAndBeautyExpenses: 0,
  healthAndBeautyTotal: () =>
    get().healthPlan +
    get().doctorsAndPsychologists +
    get().medicine +
    get().hygieneProducts +
    get().gym +
    get().salon +
    get().otherHealthAndBeautyExpenses,
  setHealthAndBeauty: (field, amount) => set({ [field]: amount }),
})
