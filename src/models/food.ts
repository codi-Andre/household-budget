type State = {
  groceries: number
  awayFromHome: number
  otherFoodExpenses: number
}

type Action = {
  foodTotal: () => number
  setFood: (field: keyof State, amount: number) => void
  clearFood: () => void
  saveFood: () => void
}

export type Food = State & Action
