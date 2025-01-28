import { Education } from "@/models/education"
import { getInitialStateFromLocalStorage } from "@/utils/get-initial-state-from-local-storage"
import { StateCreator } from "zustand"

const LOCAL_STORAGE_KEY = "budget:education@0.1"
const initialState = {
  schoolUniform: 0,
  schoolSupplies: 0,
  college: 0,
  books: 0,
  courses: 0,
  otherEducationExpenses: 0,
}

export const createEducationSlice: StateCreator<
  Education,
  [],
  [],
  Education
> = (set, get) => ({
  ...getInitialStateFromLocalStorage<typeof initialState>(
    initialState,
    LOCAL_STORAGE_KEY
  ),
  educationTotal: () =>
    get().schoolUniform +
    get().schoolSupplies +
    get().college +
    get().books +
    get().courses +
    get().otherEducationExpenses,
  setEducation: (field, amount) => set({ [field]: amount }),
  clearEducation: () => set(initialState),
  saveEducation: () => {
    const state = {
      schoolUniform: get().schoolUniform,
      schoolSupplies: get().schoolSupplies,
      college: get().college,
      books: get().books,
      courses: get().courses,
      otherEducationExpenses: get().otherEducationExpenses,
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
  },
})
