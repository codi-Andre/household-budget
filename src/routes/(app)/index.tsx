import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/(app)/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <header className="container">
        <h1>Hello world!</h1>
      </header>
    </>
  )
}
