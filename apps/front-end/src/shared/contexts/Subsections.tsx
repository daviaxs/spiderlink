import React, { createContext, useState, useCallback, ReactNode } from 'react'
import { api } from '@/lib/axios'
import { userAccesToken } from '../constants/cookiesValues'

interface Subsection {
  id: string
  name: string
  limit: number
  required: boolean
  multipleChoice: boolean
}

interface SubsectionsContextData {
  subsections: Subsection[]
  loading: boolean
  fetchSubsections: (productId: string) => void
  deleteSubsection: (id: string) => void
}

export const SubsectionsContext = createContext<SubsectionsContextData>(
  {} as SubsectionsContextData,
)

export const SubsectionsProvider = ({ children }: { children: ReactNode }) => {
  const [subsections, setSubsections] = useState<Subsection[]>([])
  const [productId, setProductId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchSubsections = useCallback(async (productId: string) => {
    setLoading(true)
    const response = await api.get(
      `/subsections/${process.env.NEXT_PUBLIC_DOMAIN_ID}/${productId}`,
    )
    setSubsections(response.data.subsections)
    setProductId(productId)
    setLoading(false)
  }, [])

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
      })
      .catch(() => {
        window.alert(
          'Erro ao deletar subseção. Por favor, atualize a página e tente novamente.',
        )
      })
    fetchSubsections(productId as string)
  }

  return (
    <SubsectionsContext.Provider
      value={{ subsections, loading, deleteSubsection, fetchSubsections }}
    >
      {children}
    </SubsectionsContext.Provider>
  )
}
