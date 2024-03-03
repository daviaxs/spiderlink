import { FormEvent, useState } from 'react'
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../functions/localStorage'
import { SPIDER_LINK_USER_INFOS } from '../constants/names'

export function useUpdateUserAddressForm() {
  const [errorMessage, setErrorMessage] = useState<string | null>()
  const [successMessage, setSuccessMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  const updateUserAddressForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)

    const street = formData.get('rua')
    const neighborhood = formData.get('bairro')
    const city = formData.get('cidade')
    const number = formData.get('numero')
    const complement = formData.get('complemento')

    if (!street || !neighborhood || !city || !number || !complement) {
      setErrorMessage('Preencha todos os campos')
      setLoading(false)
      return
    }

    const userInfos = getLocalStorageItem(SPIDER_LINK_USER_INFOS)

    const name = userInfos?.nome
    const phone = userInfos?.telefone

    try {
      setErrorMessage(null)

      const userInfo = {
        nome: name,
        telefone: phone,
        endereco: {
          rua: street,
          bairro: neighborhood,
          cidade: city,
          numero: number,
          complemento: complement,
        },
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
    updateUserAddressForm,
  }
}
