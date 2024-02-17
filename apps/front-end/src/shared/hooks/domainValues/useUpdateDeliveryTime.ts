import { useForm } from 'react-hook-form'
import {
  deliveryTimeSchema,
  deliveryTimeSchemaData,
} from '../../schemas/DeliveryTimeSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/axios'
import { useState } from 'react'
import { userAccesToken } from '../../constants/cookiesValues'

export function useUpdateDeliveryTime() {
  const [errorMessage, setErrorMessage] = useState<string | null>()
  const [successMessage, setSuccessMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  const methods = useForm<deliveryTimeSchemaData>({
    resolver: zodResolver(deliveryTimeSchema),
    mode: 'onChange',
  })

  const updateDeliveryTime = (data: deliveryTimeSchemaData) => {
    const { deliveryTime } = data
    setLoading(true)

    api
      .patch(
        `/domains/${process.env.NEXT_PUBLIC_DOMAIN_ID}`,
        { deliveryTime },
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
    updateDeliveryTime,
    methods,
  }
}
