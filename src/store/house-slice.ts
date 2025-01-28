import { House } from "@/models/house"
import { getInitialStateFromLocalStorage } from "@/utils/get-initial-state-from-local-storage"
import { StateCreator } from "zustand"

const LOCAL_STORAGE_KEY = "budget@house:0.1"
const initialState = {
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
}

export const createHouseSlice: StateCreator<House, [], [], House> = (
  set,
  get
) => ({
  ...getInitialStateFromLocalStorage<typeof initialState>(
    initialState,
    LOCAL_STORAGE_KEY
  ),
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
  clearHouse: () => set(initialState),
  saveHouse: () => {
    const state = {
      rent: get().rent,
      houseTaxes: get().houseTaxes,
      condominiumFee: get().condominiumFee,
      water: get().water,
      energy: get().energy,
      houseGas: get().houseGas,
      tv: get().tv,
      internet: get().internet,
      cellphone: get().cellphone,
      cleaningServicesAndProducts: get().cleaningServicesAndProducts,
      babySitter: get().babySitter,
      otherHouseExpenses: get().otherHouseExpenses,
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
  },
})
