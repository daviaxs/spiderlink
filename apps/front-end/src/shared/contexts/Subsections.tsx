import React, {
  createContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from 'react'
import { api } from '@/lib/axios'
import { userAccesToken } from '../constants/cookiesValues'
import { Option } from './Options'

export interface Subsection {
  id: string
  name: string
  limit: number
  required: boolean
  multipleChoice: boolean
  Options: Option[]
}

interface SubsectionsContextData {
  subsections: Subsection[]
  loading: boolean
  setProductId: (productId: string) => void
  deleteSubsection: (id: string) => void
}

export const SubsectionsContext = createContext<SubsectionsContextData>(
  {} as SubsectionsContextData,
)

export const SubsectionsProvider = ({ children }: { children: ReactNode }) => {
  const [subsectionsByProduct, setSubsectionsByProduct] = useState<
    Record<string, Subsection[]>
  >({})

  const [productId, setProductId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchSubsections = useCallback(
    async (productId: string) => {
      setLoading(true)
      if (!subsectionsByProduct[productId]) {
        const response = await api.get(
          `/subsections/${process.env.NEXT_PUBLIC_DOMAIN_ID}/${productId}`,
        )

        setSubsectionsByProduct((prev) => ({
          ...prev,
          [productId]: response.data.subsections,
        }))
      }
      setLoading(false)
    },
    [subsectionsByProduct],
  )

  useEffect(() => {
    if (productId) {
      fetchSubsections(productId)
    }
  }, [fetchSubsections, productId])

  async function deleteSubsection(subsectionId: string) {
    setLoading(true)
    await api
      .delete(
        `/subsections/${process.env.NEXT_PUBLIC_DOMAIN_ID}/${subsectionId}`,
        {
          headers: {
            Authorization: `Bearer ${userAccesToken}`,
          },
        },
      )
      .then(() => {
        window.alert('Subseção deletada com sucesso')

        setSubsectionsByProduct((prev) => {
          const newSubsections = prev[productId as string].filter(
            (subsection) => subsection.id !== subsectionId,
          )

          return {
            ...prev,
            [productId as string]: [...newSubsections],
          }
        })
      })
      .catch(() => {
        window.alert(
          'Erro ao deletar subseção. Por favor, atualize a página e tente novamente.',
        )
      })
      .finally(() => {
        setLoading(false)
      })

    fetchSubsections(productId as string)
  }

  return (
    <SubsectionsContext.Provider
      value={{
        subsections: subsectionsByProduct[productId as string] || [],
        loading,
        deleteSubsection,
        setProductId,
      }}
    >
      {children}
    </SubsectionsContext.Provider>
  )
}
