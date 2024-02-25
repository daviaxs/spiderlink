import React, {
  createContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from 'react'
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
  setCategoryId: (categoryId: string) => void
  deleteProduct: (id: string) => void
}

export const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData,
)

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [productsByCategory, setProductsByCategory] = useState<
    Record<string, Product[]>
  >({})

  const [categoryId, setCategoryId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchProducts = useCallback(
    async (categoryId: string) => {
      if (!productsByCategory[categoryId]) {
        setLoading(true)
        const response = await api.get(
          `/products/${process.env.NEXT_PUBLIC_DOMAIN_ID}/${categoryId}`,
        )
        setProductsByCategory((prev) => ({
          ...prev,
          [categoryId]: response.data.products,
        }))
        setLoading(false)
      }
    },
    [productsByCategory],
  )

  useEffect(() => {
    if (categoryId) {
      fetchProducts(categoryId)
    }
  }, [categoryId, fetchProducts])

  async function deleteProduct(productId: string) {
    setLoading(true)
    await api
      .delete(`/products/${process.env.NEXT_PUBLIC_DOMAIN_ID}`, {
        data: { productId },
        headers: {
          Authorization: `Bearer ${userAccesToken}`,
        },
      })
      .then(() => {
        window.alert('Produto deletado com sucesso')

        setProductsByCategory((prev) => {
          const newProducts = prev[categoryId as string].filter(
            (product) => product.id !== productId,
          )

          return {
            ...prev,
            [categoryId as string]: [...newProducts],
          }
        })
      })
      .catch(() => {
        window.alert(
          'Erro ao deletar produto. Por favor, atualize a página e tente novamente.',
        )
      })
      .finally(() => {
        setLoading(false)
      })
    fetchProducts(categoryId as string)
  }

  return (
    <ProductsContext.Provider
      value={{
        products: productsByCategory[categoryId as string] || [],
        loading,
        deleteProduct,
        setCategoryId,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
