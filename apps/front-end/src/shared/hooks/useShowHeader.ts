import { useEffect, useState } from 'react'

export function useShowHeader() {
  const [showHeader, setShowHeader] = useState(true)
  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0,
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((prevState) => {
        return {
          y: window.scrollY,
          lastY: prevState.y,
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const isScrollingUp = scrollData.y < scrollData.lastY
    const shouldShowHeader = isScrollingUp || scrollData.y <= 50

    setShowHeader(shouldShowHeader)
  }, [scrollData])

  return showHeader
}
