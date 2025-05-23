import { useForm } from 'react-hook-form'
import { addressSchema, addressSchemaData } from '../../schemas/AddressSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/axios'
import { useState } from 'react'
import { userAccesToken } from '../../constants/cookiesValues'

export function useUpdateAddress() {
  const [errorMessage, setErrorMessage] = useState<string | null>()
  const [successMessage, setSuccessMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  const methods = useForm<addressSchemaData>({
    resolver: zodResolver(addressSchema),
    mode: 'onChange',
  })

  const updateAddress = (data: addressSchemaData) => {
    const { address } = data
    setLoading(true)

    api
      .patch(
        `/domains/${process.env.NEXT_PUBLIC_DOMAIN_ID}`,
        { address },
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
    updateAddress,
    methods,
  }
}
