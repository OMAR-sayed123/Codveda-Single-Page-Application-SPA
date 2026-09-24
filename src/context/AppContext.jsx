import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [hasSubmittedContact, setHasSubmittedContact] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light'
  }, [isDarkMode])

  const toggleMenu = () => setIsMenuOpen((open) => !open)
  const closeMenu = () => setIsMenuOpen(false)
  const toggleTheme = () => setIsDarkMode((dark) => !dark)

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        isDarkMode,
        hasSubmittedContact,
        toggleMenu,
        closeMenu,
        toggleTheme,
        setHasSubmittedContact,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useAppContext must be used within AppProvider')
  return context
}
