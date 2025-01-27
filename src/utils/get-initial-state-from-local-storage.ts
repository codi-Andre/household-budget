export function getInitialStateFromLocalStorage<T>(
  initialState: T,
  key: string
) {
  const jsonValue = localStorage.getItem(key)

  if (!jsonValue) {
    return initialState
  }

  return JSON.parse(jsonValue) as T
}
