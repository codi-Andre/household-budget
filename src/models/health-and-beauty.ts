export type HealthAndBeauty = {
  medicine: number
  healthPlan: number
  doctorsAndPsychologists: number
  hygieneProducts: number
  gym: number
  salon: number
  otherHealthAndBeautyExpenses: number
  healthAndBeautyComplementary: number
  setMedicine: (amount: number) => void
  setHealthPlan: (amount: number) => void
  setDoctorsAndPsychologists: (amount: number) => void
  setHygieneProducts: (amount: number) => void
  setGym: (amount: number) => void
  setSalon: (amount: number) => void
  setOtherHealthAndBeautyExpenses: (amount: number) => void
  setHealthAndBeautyComplementary: (amount: number) => void
  total: () => number
}
