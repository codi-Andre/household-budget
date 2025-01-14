import { Link } from "@tanstack/react-router"
import styles from "./not-found-page.module.css"

export function NotFoundPage() {
  return (
    <main className={`container ${styles.main}`}>
      <h2 className={styles.title}>
        The page you are looking for does not exist.
      </h2>

      <p className={styles.nav}>
        <button onClick={() => window.history.back()}>Go back</button>
        <Link to="/">Start Over</Link>
      </p>
    </main>
  )
}
