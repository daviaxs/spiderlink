import { api } from '@/lib/axios'
import { FormEvent, useState } from 'react'
import { userAccesToken } from '../constants/cookiesValues'

interface UpdateOptionProps {
  optionId: string
}

export function useUpdateOption({ optionId }: UpdateOptionProps) {
  const [errorMessage, setErrorMessage] = useState<string | null>()
  const [successMessage, setSuccessMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  const updateOption = async (event: FormEvent<HTMLFormElement>) => {
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
      .patch(
        `/options/${process.env.NEXT_PUBLIC_DOMAIN_ID}/${optionId}`,
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
        location.reload()
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
    updateOption,
  }
}
