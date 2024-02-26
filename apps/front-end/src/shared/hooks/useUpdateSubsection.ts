import { api } from '@/lib/axios'
import { FormEvent, useState } from 'react'
import { userAccesToken } from '../constants/cookiesValues'

interface UpdateSubsectionProps {
  subsectionId: string
}

export function useUpdateSubsection({ subsectionId }: UpdateSubsectionProps) {
  const [errorMessage, setErrorMessage] = useState<string | null>()
  const [successMessage, setSuccessMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  const updateSubsection = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)

    const name = formData.get('name')
    const limitBase = formData.get('limit')
    const requiredBase = formData.get('required')
    const multipleChoiceBase = formData.get('multipleChoice')

    let limit = 0
    let required = false
    let multipleChoice = false

    if (limitBase) {
      limit = Number(limitBase)
    }

    if (!name) {
      setErrorMessage('Preencha todos os campos')
      setLoading(false)
      return
    }

    if (limit === 0) {
      setErrorMessage('Defina um limite de 1 até 99')
      setLoading(false)
      return
    }

    if (requiredBase === 'true') {
      required = true
    }

    if (multipleChoiceBase === 'true') {
      multipleChoice = true
    }

    api
      .patch(
        `/subsections/${process.env.NEXT_PUBLIC_DOMAIN_ID}/${subsectionId}`,
        { name, limit, required, multipleChoice },
        {
          headers: {
            Authorization: `Bearer ${userAccesToken}`,
          },
        },
      )
      .then(() => {
        setErrorMessage(null)
        setSuccessMessage(true)
        location.reload()
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
    updateSubsection,
  }
}
