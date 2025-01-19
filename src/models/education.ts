export type Education = {
  college: number
  books: number
  courses: number
  otherEducationExpenses: number
  educationComplementary: number
  setCollege: (amount: number) => void
  setBooks: (amount: number) => void
  setCourses: (amount: number) => void
  setOtherEducationExpenses: (amount: number) => void
  setEducationComplementary: (amount: number) => void
  total: () => number
}
