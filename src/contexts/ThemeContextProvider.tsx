import React, {createContext, useContext} from "react";

type ThemeContextType = {
  darkMode: boolean,
  toggleTheme?: (value: boolean) => void
}

const initialState = {
  darkMode: false,
}

const ThemeContext = createContext<ThemeContextType>(initialState)

type ThemeContextProviderType = {
  children: React.ReactNode
}

export const ThemeContextProvider = ({children}: ThemeContextProviderType) => {
  const [ darkMode, setDarkMode ] = React.useState(false)

  const toggleTheme = React.useCallback(() => {
    setDarkMode(!darkMode)
  }, [darkMode,setDarkMode ])

  const value = React.useMemo(() => ({
    toggleTheme,
    darkMode
  }), [darkMode, toggleTheme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)