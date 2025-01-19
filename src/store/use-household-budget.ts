import { create } from "zustand"
import { Revenue } from "@/models/revenue"
import { Investment } from "@/models/investment"
import { createRevenueSlice } from "./revenue-slice"
import { createInvestmentSlice } from "./investment-slice"
import { House } from "@/models/house"
import { createHouseSlice } from "./house-slice"
import { Food } from "@/models/food"
import { createFoodSlice } from "./food-slice"
import { HealthAndBeauty } from "@/models/health-and-beauty"
import { createHealthAndBeautySlice } from "./health-and-beauty-slice"
import { Transport } from "@/models/transport"
import { Education } from "@/models/education"
import { createTransportSlice } from "./transport-slice"
import { createEducationSlice } from "./education-slice"

type HouseholdBudget = Revenue &
  Investment &
  House &
  Food &
  HealthAndBeauty &
  Transport &
  Education

export const useHouseholdBudget = create<HouseholdBudget>()((...a) => ({
  ...createRevenueSlice(...a),
  ...createInvestmentSlice(...a),
  ...createHouseSlice(...a),
  ...createFoodSlice(...a),
  ...createHealthAndBeautySlice(...a),
  ...createTransportSlice(...a),
  ...createEducationSlice(...a),
}))
