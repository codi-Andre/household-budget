import { Input } from "@/components/ui/input/input"
import styles from "./currency-input.module.css"

type CurrencyInputProps = {
  label: string
  value: number
  setValue: (value: number) => void
}

export function CurrencyInput({ label, value, setValue }: CurrencyInputProps) {
  return (
    <label className={styles.label}>
      {label}

      <Input
        type="number"
        className={`${styles.currency}`}
        value={value || ""}
        onChange={(e) => {
          if (Number.isNaN(e.target.valueAsNumber)) {
            return
          }
          setValue(e.target.valueAsNumber)
        }}
        onKeyDown={(e) => {
          if (
            (e.key === "Backspace" || e.key === "Delete") &&
            value.toString().length === 1
          ) {
            setValue(0)
          }
        }}
      />
    </label>
  )
}
