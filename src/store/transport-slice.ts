import { Transport } from "@/models/transport"
import { StateCreator } from "zustand"

export const createTransportSlice: StateCreator<Transport> = (set, get) => ({
  subway: 0,
  bus: 0,
  transportGas: 0,
  parking: 0,
  carMaintenance: 0,
  insurance: 0,
  transportTaxes: 0,
  otherTransportExpenses: 0,
  transportComplementary: 0,
  setSubway: (amount: number) => set({ subway: amount }),
  setBus: (amount: number) => set({ bus: amount }),
  setTransportGas: (amount: number) => set({ transportGas: amount }),
  setParking: (amount: number) => set({ parking: amount }),
  setCarMaintenance: (amount: number) => set({ carMaintenance: amount }),
  setInsurance: (amount: number) => set({ insurance: amount }),
  setTransportTaxes: (amount: number) => set({ transportTaxes: amount }),
  setOtherTransportExpenses: (amount: number) =>
    set({ otherTransportExpenses: amount }),
  setTransportComplementary: (amount: number) =>
    set({ transportComplementary: amount }),
  total: () =>
    get().subway +
    get().bus +
    get().transportGas +
    get().parking +
    get().carMaintenance +
    get().insurance +
    get().transportTaxes +
    get().otherTransportExpenses +
    get().transportComplementary,
})
