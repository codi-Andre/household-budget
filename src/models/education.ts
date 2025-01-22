type State = {
  books: number
  college: number
  courses: number
  schoolSupplies: number
  schoolUniform: number
  otherEducationExpenses: number
}

type Action = {
  educationTotal: () => number
  setEducation: (field: keyof State, amount: number) => void
}

export type Education = State & Action
