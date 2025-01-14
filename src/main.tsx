import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import "./styles/modern-normalize.css"
import "./styles/index.css"

// Import the generated route tree
import { routeTree } from "./routeTree.gen"
import { createRouter, RouterProvider } from "@tanstack/react-router"
import { DefaultCatchBoundary } from "./components/default-catch-boundary/default-catch-boundary"
import { NotFoundPage } from "./components/not-found-page/not-found-page"

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultErrorComponent: DefaultCatchBoundary,
  defaultNotFoundComponent: NotFoundPage,
})

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById("root")!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}
