import { House } from "@/models/house"
import { StateCreator } from "zustand"

export const createHouseSlice: StateCreator<House> = (set, get) => ({
  rent: 0,
  houseTaxes: 0,
  condominiumFee: 0,
  water: 0,
  energy: 0,
  houseGas: 0,
  tv: 0,
  internet: 0,
  cellphone: 0,
  cleaningServicesAndProducts: 0,
  babySitter: 0,
  houseComplementary: 0,
  setRent: (amount: number) => set({ rent: amount }),
  setHouseTaxes: (amount: number) => set({ houseTaxes: amount }),
  setCondominiumFee: (amount: number) => set({ condominiumFee: amount }),
  setWater: (amount: number) => set({ water: amount }),
  setEnergy: (amount: number) => set({ energy: amount }),
  setHouseGas: (amount: number) => set({ houseGas: amount }),
  setTv: (amount: number) => set({ tv: amount }),
  setInternet: (amount: number) => set({ internet: amount }),
  setCellphone: (amount: number) => set({ cellphone: amount }),
  setCleaningServicesAndProducts: (amount: number) =>
    set({ cleaningServicesAndProducts: amount }),
  setBabySitter: (amount: number) => set({ babySitter: amount }),
  setHouseComplementary: (amount: number) =>
    set({ houseComplementary: amount }),
  houseTotal: () =>
    get().rent +
    get().houseTaxes +
    get().condominiumFee +
    get().water +
    get().houseGas +
    get().tv +
    get().internet +
    get().cellphone +
    get().cleaningServicesAndProducts +
    get().babySitter +
    get().houseComplementary,
})
