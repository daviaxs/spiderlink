import { api } from '@/lib/axios'
import { FormEvent, useState } from 'react'
import { userAccesToken } from '../constants/cookiesValues'

interface CreateOptionProps {
  categoryId: string
  productId: string
  subsectionId: string
}

export function useCreateOption({
  subsectionId,
  categoryId,
  productId,
}: CreateOptionProps) {
  const [errorMessage, setErrorMessage] = useState<string | null>()
  const [successMessage, setSuccessMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  const createOption = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)

    const name = formData.get('name')
    const description = formData.get('description')
    const priceBase = formData.get('price')

    if (!name || !priceBase) {
      setErrorMessage('Preencha todos os campos')
      setLoading(false)
      return
    }

    if (description && description?.toString().length > 99) {
      setErrorMessage('A descrição deve ter no máximo 99 caracteres')
      setLoading(false)
      return
    }

    let price: number | string = ''

    function convertToNumber(value: string) {
      return Number(value)
    }

    function getOnlyNumbers(value: string) {
      return value.replace(/[^0-9]/g, '')
    }

    if (priceBase) {
      price = convertToNumber(getOnlyNumbers(priceBase as string))
    }

    api
      .post(
        `/options/${process.env.NEXT_PUBLIC_DOMAIN_ID}/${subsectionId}`,
        { name, description, price },
        {
          headers: {
            Authorization: `Bearer ${userAccesToken}`,
          },
        },
      )
      .then(() => {
        setErrorMessage(null)
        setSuccessMessage(true)
        window.location.href = `/admin/items/categorias/${categoryId}/produtos/${productId}/subsecoes/${subsectionId}`
      })
      .catch((e) => {
        setErrorMessage(e.response.data.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return {
    loading,
    successMessage,
    errorMessage,
    createOption,
  }
}
