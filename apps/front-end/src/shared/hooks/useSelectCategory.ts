import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function useSelectCategory(id: string) {
  const router = useRouter()
  const [focus, setFocus] = useState(false)

  const handleClick = () => {
    router.push(`?category=${id}`)
    setFocus(true)
  }

  return { handleClick, focus }
}
