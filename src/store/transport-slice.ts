import { Transport } from "@/models/transport"
import { StateCreator } from "zustand"

export const createTransportSlice: StateCreator<
  Transport,
  [],
  [],
  Transport
> = (set, get) => ({
  subway: 0,
  bus: 0,
  transportGas: 0,
  parking: 0,
  carMaintenance: 0,
  insurance: 0,
  transportTaxes: 0,
  otherTransportExpenses: 0,
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
})
