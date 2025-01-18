export type House = {
  houseTaxes: number
  water: number
  energy: number
  houseGas: number
  tv: number
  internet: number
  cellphone: number
  cleaningServicesAndProducts: number
  houseComplementary: number
  setHouseTaxes: (amount: number) => void
  setWater: (amount: number) => void
  setEnergy: (amount: number) => void
  setHouseGas: (amount: number) => void
  setTv: (amount: number) => void
  setInternet: (amount: number) => void
  setCellphone: (amount: number) => void
  setCleaningServicesAndProducts: (amount: number) => void
  setHouseComplementary: (amount: number) => void
  houseTotal: () => number
}
