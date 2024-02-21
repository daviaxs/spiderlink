import { api } from '@/lib/axios'
import { userAccesToken } from '../constants/cookiesValues'
import { useState } from 'react'

export function useAddCategory() {
  const [loading, setLoading] = useState(false)

  const addCategory = (name: string) => {
    setLoading(true)

    api
      .post(
        `/categories/${process.env.NEXT_PUBLIC_DOMAIN_ID}`,
        { name },
        {
          headers: {
            Authorization: `Bearer ${userAccesToken}`,
          },
        },
      )
      .then(() => {
        window.alert('Categoria adicionada com sucesso')
      })
      .catch((e) => {
        window.alert(e.response.data.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return {
    addCategory,
    loading,
  }
}
