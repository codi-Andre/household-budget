import { createRootRoute, Outlet } from "@tanstack/react-router"
import { Toaster } from "sonner"

export const Route = createRootRoute({
  component: () => (
    <>
      <Toaster expand richColors position="top-center" />
      <Outlet />
    </>
  ),
})
