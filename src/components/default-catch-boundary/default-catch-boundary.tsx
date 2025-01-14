import {
  ErrorComponent,
  Link,
  rootRouteId,
  useMatch,
  useRouter,
} from "@tanstack/react-router"
import type { ErrorComponentProps } from "@tanstack/react-router"
import styles from "./default-catch-boundary.module.css"

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter()
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId,
  })

  console.error("DefaultCatchBoundary Error:", error)

  return (
    <main className={`container ${styles.main}`}>
      <ErrorComponent error={error} />
      <div className={styles.nav}>
        <button
          onClick={() => {
            void router.invalidate()
          }}
        >
          Try Again
        </button>
        {isRoot ? (
          <Link to="/">Home</Link>
        ) : (
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault()
              window.history.back()
            }}
          >
            Go Back
          </Link>
        )}
      </div>
    </main>
  )
}
