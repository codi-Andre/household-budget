export type Food = {
  groceries: number
  awayFromHome: number
  otherFoodExpenses: number
  foodComplementary: number
  setGroceries: (amount: number) => void
  setAwayFromHome: (amount: number) => void
  setOtherFoodExpenses: (amount: number) => void
  setFoodComplementary: (amount: number) => void
  total: () => number
}
