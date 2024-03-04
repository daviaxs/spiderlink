import { FormEvent, useContext, useState } from 'react'
import { getLocalStorageItem } from '../functions/localStorage'
import { SPIDER_LINK_USER_INFOS } from '../constants/names'
import { DeliveryDetailsContext } from '../contexts/DeliveryDetails'

export function useUpdateUserAddressForm() {
  const [errorMessage, setErrorMessage] = useState<string | null>()
  const [successMessage, setSuccessMessage] = useState(false)
  const [loading, setLoading] = useState(false)
  const { closeUpdateAddressDialog, updateUserDeliveryDetails } = useContext(
    DeliveryDetailsContext,
  )

  function saveAddress() {
    closeUpdateAddressDialog()
  }

  const updateUserAddressForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)

    const street = formData.get('rua') as string
    const neighborhood = formData.get('bairro') as string
    const city = formData.get('cidade') as string
    const number = formData.get('numero') as string
    const complement = formData.get('complemento') as string

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

      updateUserDeliveryDetails(userInfo)

      await new Promise((resolve) => setTimeout(resolve, 500))

      setLoading(false)
      setSuccessMessage(true)

      await new Promise((resolve) => setTimeout(resolve, 500))

      setSuccessMessage(false)
      saveAddress()
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
