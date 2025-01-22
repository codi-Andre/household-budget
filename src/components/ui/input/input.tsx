import { ComponentProps } from "react"
import styles from "./input.module.css"

type InputProps = {
  type?: "text" | "number"
} & ComponentProps<"input">

export function Input({ type = "text", className = "", ...props }: InputProps) {
  return (
    <input type={type} className={`${styles.input} ${className}`} {...props} />
  )
}
