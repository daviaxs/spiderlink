import { api } from '@/lib/axios'
import { useEffect, useState } from 'react'

interface Category {
  id: string
  name: string
  domainId: string
}

interface CategoriesResponse {
  categories: Category[]
  loading?: boolean
}

export function useGetCategories(): CategoriesResponse {
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState<CategoriesResponse>({
    categories: [],
  })

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true)

      try {
        api
          .get(`/categories/${process.env.NEXT_PUBLIC_DOMAIN_ID}`)
          .then((res) => {
            setCategories(res.data)
          })
          .finally(() => {
            setLoading(false)
          })
      } catch (error) {
        console.error(error)
      }
    }

    fetchCategories()
  }, [])

  return { categories: categories.categories, loading }
}
