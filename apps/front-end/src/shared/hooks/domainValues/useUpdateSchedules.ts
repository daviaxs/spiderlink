import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/axios'
import { useState } from 'react'
import { userAccesToken } from '../../constants/cookiesValues'
import {
  scheduleSchemaData,
  scheduleSchema,
} from '../../schemas/SchedulesSchema'

export function useUpdateSchedules() {
  const [errorMessage, setErrorMessage] = useState<string | null>()
  const [successMessage, setSuccessMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  const methods = useForm<scheduleSchemaData>({
    resolver: zodResolver(scheduleSchema),
    mode: 'onChange',
  })

  const updateSchedules = (data: scheduleSchemaData) => {
    setLoading(true)

    api
      .patch(
        `schedules/${process.env.NEXT_PUBLIC_DOMAIN_ID}/${process.env.NEXT_PUBLIC_SCHEDULE_ID}`,
        data,
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
    updateSchedules,
    methods,
  }
}
