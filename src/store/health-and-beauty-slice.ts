import { HealthAndBeauty } from "@/models/health-and-beauty"
import { StateCreator } from "zustand"

export const createHealthAndBeautySlice: StateCreator<HealthAndBeauty> = (
  set,
  get
) => ({
  medicine: 0,
  hygieneProducts: 0,
  gym: 0,
  salon: 0,
  otherHealthAndBeautyExpenses: 0,
  healthAndBeautyComplementary: 0,
  setMedicine: (amount: number) => set({ medicine: amount }),
  setHygieneProducts: (amount: number) => set({ hygieneProducts: amount }),
  setGym: (amount: number) => set({ gym: amount }),
  setSalon: (amount: number) => set({ salon: amount }),
  setOtherHealthAndBeautyExpenses: (amount: number) =>
    set({ otherHealthAndBeautyExpenses: amount }),
  setHealthAndBeautyComplementary: (amount: number) =>
    set({ healthAndBeautyComplementary: amount }),
  total: () =>
    get().medicine +
    get().hygieneProducts +
    get().gym +
    get().salon +
    get().otherHealthAndBeautyExpenses +
    get().healthAndBeautyComplementary,
})
