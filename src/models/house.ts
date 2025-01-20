export type House = {
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
  houseComplementary: number
  setRent: (amount: number) => void
  setHouseTaxes: (amount: number) => void
  setCondominiumFee: (amount: number) => void
  setWater: (amount: number) => void
  setEnergy: (amount: number) => void
  setHouseGas: (amount: number) => void
  setTv: (amount: number) => void
  setInternet: (amount: number) => void
  setCellphone: (amount: number) => void
  setCleaningServicesAndProducts: (amount: number) => void
  setBabySitter: (amount: number) => void
  setHouseComplementary: (amount: number) => void
  houseTotal: () => number
}
