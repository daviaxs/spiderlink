import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function useSelectCategory(
  id: string,
  focusId: string,
  setFocusId: (id: string) => void,
  categories: { id: string }[],
) {
  const router = useRouter()
  const isFocused = id === focusId

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const category = params.get('category')

    if (category) {
      setFocusId(category)
    } else if (categories.length > 0) {
      const firstCategory = categories[0].id

      setFocusId(categories[0].id)
      router.push(`?category=${firstCategory}`, { scroll: false })
    }
  }, [categories, router, setFocusId])

  const handleClick = () => {
    router.push(`?category=${id}`, { scroll: false })
    setFocusId(id)
  }

  return {
    isFocused,
    handleClick,
  }
}
