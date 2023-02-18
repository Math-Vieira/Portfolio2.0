
import { useCallback, useState } from 'react'

interface ToggleState {
  state: boolean
  toggle: () => void
}

export const useToggle = (initialState: boolean = false): ToggleState => {
  const [state, setState] = useState(initialState)

  const toggle = useCallback(() => setState((state) => !state), [])

  return { state, toggle }
}