import { useForm } from 'react-hook-form'
import { cepSchema, cepSchemaData } from '../../schemas/CepSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/axios'
import { useState } from 'react'
import { userAccesToken } from '../../constants/cookiesValues'

export function useUpdateCep() {
  const [errorMessage, setErrorMessage] = useState<string | null>()
  const [successMessage, setSuccessMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  const methods = useForm<cepSchemaData>({
    resolver: zodResolver(cepSchema),
    mode: 'onChange',
  })

  const updateCep = (data: cepSchemaData) => {
    const { cep } = data
    setLoading(true)

    api
      .patch(
        `/domains/${process.env.NEXT_PUBLIC_DOMAIN_ID}`,
        { cep },
        {
          headers: {
            Authorization: `Bearer ${userAccesToken}`,
          },
        },
      )
      .then(() => {
        setErrorMessage(null)
        setSuccessMessage(true)
        window.location.href = '/admin/perfil'
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
    updateCep,
    methods,
  }
}
