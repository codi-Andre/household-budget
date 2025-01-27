import { House } from "@/models/house"
import { StateCreator } from "zustand"

export const createHouseSlice: StateCreator<House, [], [], House> = (
  set,
  get
) => ({
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
  otherHouseExpenses: 0,
  houseTotal: () =>
    get().rent +
    get().houseTaxes +
    get().condominiumFee +
    get().water +
    get().energy +
    get().houseGas +
    get().tv +
    get().internet +
    get().cellphone +
    get().cleaningServicesAndProducts +
    get().babySitter +
    get().otherHouseExpenses,
  setHouse: (field, amount) => set({ [field]: amount }),
})
