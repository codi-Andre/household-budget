import { useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key)

    if (jsonValue !== null && jsonValue !== undefined) {
      return JSON.parse(jsonValue) as T
    }

    if (typeof initialValue === "function") {
      return (initialValue as () => T)()
    }

    return initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as [typeof value, typeof setValue]
}
