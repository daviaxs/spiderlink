import { api } from '@/lib/axios'
import { FormEvent, useState } from 'react'
import { userAccesToken } from '../../constants/cookiesValues'

export function useUpdateDeliveryCost() {
  const [errorMessage, setErrorMessage] = useState<string | null>()
  const [successMessage, setSuccessMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  const updateDeliveryCost = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)

    const deliveryCostBase = formData.get('deliveryCost')

    if (!deliveryCostBase) {
      setErrorMessage('Preencha todos os campos')
      setLoading(false)
      return
    }

    let deliveryCost: number | string = ''

    function convertToNumber(value: string) {
      return Number(value)
    }

    function getOnlyNumbers(value: string) {
      return value.replace(/[^0-9]/g, '')
    }

    if (deliveryCostBase) {
      deliveryCost = convertToNumber(getOnlyNumbers(deliveryCostBase as string))
    }

    api
      .patch(
        `/domains/${process.env.NEXT_PUBLIC_DOMAIN_ID}`,
        { deliveryCost },
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
    updateDeliveryCost,
  }
}
