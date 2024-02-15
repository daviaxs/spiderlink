import { useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const storageValue = localStorage.getItem('SPIDERLINK_THEME')

    if (storageValue) {
      return storageValue
    } else {
      return 'light'
    }
  })

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    window.localStorage.setItem('SPIDERLINK_THEME', newTheme)
  }

  return { theme, toggleTheme }
}
