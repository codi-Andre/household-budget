import styles from "./budget-section.module.css"

type BudgetSectionProps = {
  children: React.ReactNode
  title: string
  total: string
}

export function BudgetSection({ children, title, total }: BudgetSectionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      {children}

      <p className={styles.total}>
        Total: <span>{total}</span>
      </p>
    </section>
  )
}
