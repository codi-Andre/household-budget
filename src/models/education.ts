export type Education = {
  schoolUniform: number
  schoolSupplies: number
  college: number
  books: number
  courses: number
  otherEducationExpenses: number
  educationComplementary: number
  setSchoolUniform: (amount: number) => void
  setSchoolSupplies: (amount: number) => void
  setCollege: (amount: number) => void
  setBooks: (amount: number) => void
  setCourses: (amount: number) => void
  setOtherEducationExpenses: (amount: number) => void
  setEducationComplementary: (amount: number) => void
  total: () => number
}
