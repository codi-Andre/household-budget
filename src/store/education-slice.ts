import { Education } from "@/models/education"
import { StateCreator } from "zustand"

export const createEducationSlice: StateCreator<Education> = (set, get) => ({
  schoolUniform: 0,
  schoolSupplies: 0,
  college: 0,
  books: 0,
  courses: 0,
  otherEducationExpenses: 0,
  educationComplementary: 0,
  setSchoolUniform: (amount: number) => set({ schoolUniform: amount }),
  setSchoolSupplies: (amount: number) => set({ schoolSupplies: amount }),
  setCollege: (amount: number) => set({ college: amount }),
  setBooks: (amount: number) => set({ books: amount }),
  setCourses: (amount: number) => set({ courses: amount }),
  setOtherEducationExpenses: (amount: number) =>
    set({ otherEducationExpenses: amount }),
  setEducationComplementary: (amount: number) =>
    set({ educationComplementary: amount }),
  total: () =>
    get().schoolUniform +
    get().schoolSupplies +
    get().college +
    get().books +
    get().courses +
    get().otherEducationExpenses +
    get().educationComplementary,
})
