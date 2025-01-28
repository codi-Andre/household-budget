type State = {
  subway: number
  bus: number
  transportGas: number
  parking: number
  carMaintenance: number
  insurance: number
  transportTaxes: number
  otherTransportExpenses: number
}

type Action = {
  transportTotal: () => number
  setTransport: (field: keyof State, amount: number) => void
  clearTransport: () => void
  saveTransport: () => void
}

export type Transport = State & Action
