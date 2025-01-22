type State = {
  rent: number
  houseTaxes: number
  condominiumFee: number
  water: number
  energy: number
  houseGas: number
  tv: number
  internet: number
  cellphone: number
  cleaningServicesAndProducts: number
  babySitter: number
  otherHouseExpenses: number
}

type Action = {
  houseTotal: () => number
  setHouse: (field: keyof State, amount: number) => void
}

export type House = State & Action
