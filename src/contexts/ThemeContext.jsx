import { createContext, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [interruptor, setInterruptor] = useState(false)

  function alternarInterruptor() {
    setInterruptor(!interruptor)
  }

  return (
    <ThemeContext.Provider value={{ interruptor, setInterruptor, alternarInterruptor }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext }