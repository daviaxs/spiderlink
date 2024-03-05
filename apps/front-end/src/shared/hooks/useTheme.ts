import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const storageValue = localStorage.getItem('SPIDERLINK_THEME')
    if (storageValue) {
      setTheme(storageValue)
    }
  }, [])

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    window.localStorage.setItem('SPIDERLINK_THEME', newTheme)
  }

  return { theme, toggleTheme }
}
