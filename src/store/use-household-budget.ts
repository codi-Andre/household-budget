import { create } from "zustand"
import { Revenue } from "@/models/revenue"
import { Investment } from "@/models/investment"
import { createRevenueSlice } from "./revenue-slice"
import { createInvestmentSlice } from "./investment-slice"
import { House } from "@/models/house"
import { createHouseSlice } from "./house-slice"
import { Food } from "@/models/food"
import { createFoodSlice } from "./food-slice"

export const useHouseholdBudget = create<Revenue & Investment & House & Food>()(
  (...a) => ({
    ...createRevenueSlice(...a),
    ...createInvestmentSlice(...a),
    ...createHouseSlice(...a),
    ...createFoodSlice(...a),
  })
)
