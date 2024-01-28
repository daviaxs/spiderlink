import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('SPIDERLINK_THEME')
    setTheme(storedTheme === 'dark' ? 'dark' : 'light')
  }, [])

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    window.localStorage.setItem('SPIDERLINK_THEME', newTheme)
  }

  return { theme, toggleTheme }
}
