import { House } from "@/models/house"
import { StateCreator } from "zustand"

export const createHouseSlice: StateCreator<House> = (set, get) => ({
  houseTaxes: 0,
  water: 0,
  energy: 0,
  houseGas: 0,
  tv: 0,
  internet: 0,
  cellphone: 0,
  cleaningServicesAndProducts: 0,
  houseComplementary: 0,
  setHouseTaxes: (amount: number) => set({ houseTaxes: amount }),
  setWater: (amount: number) => set({ water: amount }),
  setEnergy: (amount: number) => set({ energy: amount }),
  setHouseGas: (amount: number) => set({ houseGas: amount }),
  setTv: (amount: number) => set({ tv: amount }),
  setInternet: (amount: number) => set({ internet: amount }),
  setCellphone: (amount: number) => set({ cellphone: amount }),
  setCleaningServicesAndProducts: (amount: number) =>
    set({ cleaningServicesAndProducts: amount }),
  setHouseComplementary: (amount: number) =>
    set({ houseComplementary: amount }),
  houseTotal: () =>
    get().houseTaxes +
    get().water +
    get().houseGas +
    get().tv +
    get().internet +
    get().cellphone +
    get().cleaningServicesAndProducts +
    get().houseComplementary,
})
