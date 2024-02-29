import React, {
  createContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from 'react'
import { api } from '@/lib/axios'
import { userAccesToken } from '../constants/cookiesValues'

export interface Option {
  id: string
  name: string
  price: number
  description: string
  quantity: number
}

interface OptionsContextData {
  options: Option[]
  loading: boolean
  setSubsectionId: (subsectionId: string) => void
  deleteOption: (id: string) => void
}

export const OptionsContext = createContext<OptionsContextData>(
  {} as OptionsContextData,
)

export const OptionsProvider = ({ children }: { children: ReactNode }) => {
  const [optionsBySubsection, setOptionsBySubsection] = useState<
    Record<string, Option[]>
  >({})

  const [subsectionId, setSubsectionId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchOptions = useCallback(
    async (subsectionId: string) => {
      if (!optionsBySubsection[subsectionId]) {
        setLoading(true)

        const response = await api.get(
          `/options/${process.env.NEXT_PUBLIC_DOMAIN_ID}/${subsectionId}`,
        )

        setOptionsBySubsection((prev) => ({
          ...prev,
          [subsectionId]: response.data.options,
        }))

        setLoading(false)
      }
    },
    [optionsBySubsection],
  )

  useEffect(() => {
    if (subsectionId) {
      fetchOptions(subsectionId)
    }
  }, [fetchOptions, subsectionId])

  async function deleteOption(optionId: string) {
    setLoading(true)

    await api
      .delete(`/options/${process.env.NEXT_PUBLIC_DOMAIN_ID}/${optionId}`, {
        headers: {
          Authorization: `Bearer ${userAccesToken}`,
        },
      })
      .then(() => {
        window.alert('opção deletada com sucesso')

        setOptionsBySubsection((prev) => {
          const newOptions = prev[subsectionId as string].filter(
            (option) => option.id !== optionId,
          )

          return {
            ...prev,
            [subsectionId as string]: [...newOptions],
          }
        })
      })
      .catch(() => {
        window.alert(
          'Erro ao deletar opção. Por favor, atualize a página e tente novamente.',
        )
      })
      .finally(() => {
        setLoading(false)
      })

    fetchOptions(subsectionId as string)
  }

  return (
    <OptionsContext.Provider
      value={{
        options: optionsBySubsection[subsectionId as string] || [],
        loading,
        deleteOption,
        setSubsectionId,
      }}
    >
      {children}
    </OptionsContext.Provider>
  )
}
