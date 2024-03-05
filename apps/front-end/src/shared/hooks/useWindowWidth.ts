import { useEffect, useState } from 'react'

export const useWindowWidth = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth)
      window.addEventListener('resize', () => {
        setWidth(window.innerWidth)
      })
    }
  }, [])

  return { width }
}
