type State = {
  salary: number
  otherRevenues: number
}

type Action = {
  revenueTotal: () => number
  setRevenue: (field: keyof State, amount: number) => void
  clearRevenue: () => void
  saveRevenue: () => void
}

export type Revenue = State & Action
