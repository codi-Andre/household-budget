import { Transport } from "@/models/transport"
import { getInitialStateFromLocalStorage } from "@/utils/get-initial-state-from-local-storage"
import { StateCreator } from "zustand"

const LOCAL_STORAGE_KEY = "budget:transport@0.1"
const initialState = {
  subway: 0,
  bus: 0,
  transportGas: 0,
  parking: 0,
  carMaintenance: 0,
  insurance: 0,
  transportTaxes: 0,
  otherTransportExpenses: 0,
}

export const createTransportSlice: StateCreator<
  Transport,
  [],
  [],
  Transport
> = (set, get) => ({
  ...getInitialStateFromLocalStorage<typeof initialState>(
    initialState,
    LOCAL_STORAGE_KEY
  ),
  transportTotal: () =>
    get().subway +
    get().bus +
    get().transportGas +
    get().parking +
    get().carMaintenance +
    get().insurance +
    get().transportTaxes +
    get().otherTransportExpenses,
  setTransport: (field, amount) => set({ [field]: amount }),
  clearTransport: () => set(initialState),
  saveTransport: () => {
    const state = {
      subway: get().subway,
      bus: get().bus,
      transportGas: get().transportGas,
      parking: get().parking,
      carMaintenance: get().carMaintenance,
      insurance: get().insurance,
      transportTaxes: get().transportTaxes,
      otherTransportExpenses: get().otherTransportExpenses,
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
  },
})
