import { Education } from "@/models/education"
import { StateCreator } from "zustand"

export const createEducationSlice: StateCreator<
  Education,
  [],
  [],
  Education
> = (set, get) => ({
  schoolUniform: 0,
  schoolSupplies: 0,
  college: 0,
  books: 0,
  courses: 0,
  otherEducationExpenses: 0,
  educationTotal: () =>
    get().schoolUniform +
    get().schoolSupplies +
    get().college +
    get().books +
    get().courses +
    get().otherEducationExpenses,
  setEducation: (field, amount) => set({ [field]: amount }),
})
