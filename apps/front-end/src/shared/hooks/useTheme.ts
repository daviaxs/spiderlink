import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const theme = window.localStorage.getItem('SPIDERLINK_THEME')
      return theme === 'light' ? 'light' : 'dark'
    }

    return 'light'
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = window.localStorage.getItem('SPIDERLINK_THEME')
      setTheme((theme as 'light' | 'dark') ?? 'light')
    }
  }, [setTheme])

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    window.localStorage.setItem('SPIDERLINK_THEME', newTheme)
  }

  return { theme, toggleTheme }
}
