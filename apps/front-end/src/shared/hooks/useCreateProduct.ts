import { api } from '@/lib/axios'
import { FormEvent, useState } from 'react'
import { userAccesToken } from '../constants/cookiesValues'

export function useCreateProduct({ categoryId }: { categoryId: string }) {
  const [errorMessage, setErrorMessage] = useState<string | null>()
  const [successMessage, setSuccessMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  const createProduct = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)

    const fileToUpload = formData.get('img')
    const name = formData.get('name')
    const description = formData.get('description')
    const priceBase = formData.get('price')

    if (!name || !description || !priceBase) {
      setErrorMessage('Preencha todos os campos')
      setLoading(false)
      return
    }

    if (description.toString().length > 99) {
      setErrorMessage('A descrição deve ter no máximo 99 caracteres')
      setLoading(false)
      return
    }

    let img = ''
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

    try {
      if (fileToUpload) {
        const uploadData = new FormData()
        uploadData.set('file', fileToUpload)

        const uploadResponse = await api.post('/upload', uploadData, {
          headers: {
            Authorization: `Bearer ${userAccesToken}`,
          },
        })

        img = uploadResponse.data.data.secure_url
      }
    } catch (err) {
      setErrorMessage('Adicione uma imagem.')
      setLoading(false)
      return
    }

    api
      .post(
        `/products/${process.env.NEXT_PUBLIC_DOMAIN_ID}/${categoryId}`,
        { img, name, description, price },
        {
          headers: {
            Authorization: `Bearer ${userAccesToken}`,
          },
        },
      )
      .then(() => {
        setErrorMessage(null)
        setSuccessMessage(true)
        window.location.href = `/admin/items/categorias/${categoryId}`
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
    createProduct,
  }
}
