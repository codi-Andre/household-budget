type State = {
  medicine: number
  healthPlan: number
  doctorsAndPsychologists: number
  hygieneProducts: number
  gym: number
  salon: number
  otherHealthAndBeautyExpenses: number
}

type Action = {
  healthAndBeautyTotal: () => number
  setHealthAndBeauty: (field: keyof State, amount: number) => void
  clearHealthAndBeauty: () => void
  saveHealthAndBeauty: () => void
}

export type HealthAndBeauty = State & Action
