import { useForm } from 'react-hook-form'
import { phoneSchema, phoneSchemaData } from '../../schemas/PhoneSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/axios'
import { useState } from 'react'
import { userAccesToken } from '../../constants/cookiesValues'

export function useUpdatePhone() {
  const [errorMessage, setErrorMessage] = useState<string | null>()
  const [successMessage, setSuccessMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  const methods = useForm<phoneSchemaData>({
    resolver: zodResolver(phoneSchema),
    mode: 'onChange',
  })

  const updatePhone = (data: phoneSchemaData) => {
    const { phone } = data
    setLoading(true)

    api
      .patch(
        `/domains/${process.env.NEXT_PUBLIC_DOMAIN_ID}`,
        { phone },
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
    updatePhone,
    methods,
  }
}
