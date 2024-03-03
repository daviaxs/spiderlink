import { FormEvent, useState } from 'react'
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../functions/localStorage'
import { SPIDER_LINK_USER_INFOS } from '../constants/names'

export interface DeliveryDetailsForm {
  nome: string
  telefone: string
  endereco: {
    rua: string
    bairro: string
    cidade: string
    numero: string
    complemento: string
  }
}

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

    const userData = getLocalStorageItem(
      SPIDER_LINK_USER_INFOS,
    ) as DeliveryDetailsForm

    if (!userData || !userData.endereco) {
      setErrorMessage('Preencha o endereço')
      setLoading(false)
      return
    }

    const { rua, bairro, cidade, numero, complemento } = userData.endereco

    if (!rua || !bairro || !cidade || !numero || !complemento) {
      setErrorMessage('Todos os campos do endereço devem ser preenchidos')
      setLoading(false)
      return
    }

    try {
      setErrorMessage(null)

      const userInfo = {
        nome: name,
        telefone: phone,
        endereco: {
          rua,
          bairro,
          cidade,
          numero,
          complemento,
        },
      }

      setLocalStorageItem({ key: SPIDER_LINK_USER_INFOS, value: userInfo })

      await new Promise((resolve) => setTimeout(resolve, 500))

      setLoading(false)
      setSuccessMessage(true)

      await new Promise((resolve) => setTimeout(resolve, 500))

      setSuccessMessage(false)
      window.location.reload()
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
