import { Charts } from "@/pages/charts/charts"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/charts")({
  component: Charts,
})
