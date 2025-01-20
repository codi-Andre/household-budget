export type Transport = {
  subway: number
  bus: number
  transportGas: number
  parking: number
  carMaintenance: number
  insurance: number
  transportTaxes: number
  otherTransportExpenses: number
  transportComplementary: number
  setSubway: (amount: number) => void
  setBus: (amount: number) => void
  setTransportGas: (amount: number) => void
  setParking: (amount: number) => void
  setCarMaintenance: (amount: number) => void
  setInsurance: (amount: number) => void
  setTransportTaxes: (amount: number) => void
  setOtherTransportExpenses: (amount: number) => void
  setTransportComplementary: (amount: number) => void
  total: () => number
}
