import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { api } from '@/lib/axios'
import { userAccesToken } from '../constants/cookiesValues'
import { CategoryNames } from '@/categoryNames'

interface Category {
  id: string
  name: CategoryNames
  domainId: string
}

interface CategoriesContextData {
  categories: Category[]
  loading: boolean
  addCategory: (name: string) => void
  deleteCategory: (id: string) => void
}

export const CategoriesContext = createContext<CategoriesContextData>(
  {} as CategoriesContextData,
)

export const CategoriesProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchCategories()
  }, [])

  async function fetchCategories() {
    setLoading(true)
    const response = await api.get(
      `/categories/${process.env.NEXT_PUBLIC_DOMAIN_ID}`,
    )
    setCategories(response.data.categories)
    setLoading(false)
  }

  async function addCategory(name: string) {
    setLoading(true)
    await api
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
      .catch(() => {
        window.alert(
          'Erro ao adicionar categoria. Por favor, atualize a página e tente novamente.',
        )
      })
    fetchCategories()
  }

  async function deleteCategory(id: string) {
    setLoading(true)
    await api
      .delete(`/categories/${process.env.NEXT_PUBLIC_DOMAIN_ID}/${id}`, {
        headers: {
          Authorization: `Bearer ${userAccesToken}`,
        },
      })
      .then(() => {
        window.alert('Categoria deletada com sucesso')
      })
      .catch(() => {
        window.alert(
          'Erro ao deletar categoria. Por favor, atualize a página e tente novamente.',
        )
      })
    fetchCategories()
  }

  return (
    <CategoriesContext.Provider
      value={{ categories, loading, addCategory, deleteCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  )
}
