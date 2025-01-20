import { HealthAndBeauty } from "@/models/health-and-beauty"
import { StateCreator } from "zustand"

export const createHealthAndBeautySlice: StateCreator<HealthAndBeauty> = (
  set,
  get
) => ({
  medicine: 0,
  healthPlan: 0,
  doctorsAndPsychologists: 0,
  hygieneProducts: 0,
  gym: 0,
  salon: 0,
  otherHealthAndBeautyExpenses: 0,
  healthAndBeautyComplementary: 0,
  setMedicine: (amount: number) => set({ medicine: amount }),
  setHealthPlan: (amount: number) => set({ healthPlan: amount }),
  setDoctorsAndPsychologists: (amount: number) =>
    set({ doctorsAndPsychologists: amount }),
  setHygieneProducts: (amount: number) => set({ hygieneProducts: amount }),
  setGym: (amount: number) => set({ gym: amount }),
  setSalon: (amount: number) => set({ salon: amount }),
  setOtherHealthAndBeautyExpenses: (amount: number) =>
    set({ otherHealthAndBeautyExpenses: amount }),
  setHealthAndBeautyComplementary: (amount: number) =>
    set({ healthAndBeautyComplementary: amount }),
  total: () =>
    get().healthPlan +
    get().doctorsAndPsychologists +
    get().medicine +
    get().hygieneProducts +
    get().gym +
    get().salon +
    get().otherHealthAndBeautyExpenses +
    get().healthAndBeautyComplementary,
})
