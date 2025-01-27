import { create } from "zustand"
import { createRevenueSlice } from "./revenue-slice"
import { createInvestmentSlice } from "./investment-slice"
import { createHouseSlice } from "./house-slice"
import { createFoodSlice } from "./food-slice"
import { createHealthAndBeautySlice } from "./health-and-beauty-slice"
import { createTransportSlice } from "./transport-slice"
import { createEducationSlice } from "./education-slice"
import { createSummarySlice } from "./summary-slice"
import { HouseholdBudget } from "@/models/household-budget"

export const useHouseholdBudget = create<HouseholdBudget>()((...a) => ({
  ...createRevenueSlice(...a),
  ...createInvestmentSlice(...a),
  ...createHouseSlice(...a),
  ...createFoodSlice(...a),
  ...createHealthAndBeautySlice(...a),
  ...createTransportSlice(...a),
  ...createEducationSlice(...a),
  ...createSummarySlice(...a),
}))
