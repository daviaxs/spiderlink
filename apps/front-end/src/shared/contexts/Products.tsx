import React, { createContext, useState, useCallback, ReactNode } from 'react'
import { api } from '@/lib/axios'
import { userAccesToken } from '../constants/cookiesValues'

interface Product {
  id: string
  img: string
  name: string
  price: string | number
  description: string
}

interface ProductsContextData {
  products: Product[]
  loading: boolean
  fetchProducts: (categoryId: string) => void
  deleteProduct: (id: string) => void
}

export const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData,
)

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [categoryId, setCategoryId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchProducts = useCallback(async (categoryId: string) => {
    setLoading(true)
    const response = await api.get(
      `/products/${process.env.NEXT_PUBLIC_DOMAIN_ID}/${categoryId}`,
    )
    setProducts(response.data.products)
    setCategoryId(categoryId)
    setLoading(false)
  }, [])

  async function deleteProduct(productId: string) {
    setLoading(true)
    await api
      .delete(`/products/${process.env.NEXT_PUBLIC_DOMAIN_ID}/`, {
        data: productId,
        headers: {
          Authorization: `Bearer ${userAccesToken}`,
        },
      })
      .then(() => {
        window.alert('Produto deletado com sucesso')
      })
      .catch(() => {
        window.alert(
          'Erro ao deletar produto. Por favor, atualize a página e tente novamente.',
        )
      })
    fetchProducts(categoryId as string)
  }

  return (
    <ProductsContext.Provider
      value={{ products, loading, deleteProduct, fetchProducts }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
