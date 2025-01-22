type State = {
  investment: number
}

type Action = {
  investmentTotal: () => number
  setInvestment: (field: keyof State, amount: number) => void
}

export type Investment = State & Action
