import { FormEvent, useState } from 'react'
import { setLocalStorageItem } from '../functions/localStorage'
import { SPIDER_LINK_USER_INFOS } from '../constants/names'

export function useDeliveryDetailsForm() {
  const [errorMessage, setErrorMessage] = useState<string | null>()
  const [successMessage, setSuccessMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  const deliveryDetailsForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)

    const name = formData.get('nome')
    const phone = formData.get('telefone')

    if (!name || !phone) {
      setErrorMessage('Preencha todos os campos')
      setLoading(false)
      return
    }

    try {
      setErrorMessage(null)

      const userInfo = {
        name,
        phone,
      }

      setLocalStorageItem({ key: SPIDER_LINK_USER_INFOS, value: userInfo })

      await new Promise((resolve) => setTimeout(resolve, 500))

      setLoading(false)
      setSuccessMessage(true)

      await new Promise((resolve) => setTimeout(resolve, 500))

      setSuccessMessage(false)
    } catch (err) {
      setErrorMessage('Erro ao salvar os dados')
      setLoading(false)
    }
  }

  return {
    loading,
    successMessage,
    errorMessage,
    deliveryDetailsForm,
  }
}
