import { useForm } from 'react-hook-form'
import { signInUserData, signIpSchema } from '../schemas/SignInSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/axios'
import { setCookie } from 'nookies'
import { useContext, useState } from 'react'
import { SPIDER_LINK_ACCESS_TOKEN } from '../constants/cookiesNames'
import { DomainInfosContext } from '../contexts/DomainInfos'

export function useSignInForm() {
  const [errorMessage, setErrorMessage] = useState<string | null>()
  const [successMessage, setSuccessMessage] = useState(false)
  const [loading, setLoading] = useState(false)
  const { domainName } = useContext(DomainInfosContext)

  const methods = useForm<signInUserData>({
    resolver: zodResolver(signIpSchema),
    mode: 'onChange',
  })

  const signIn = (data: signInUserData) => {
    const { email, password } = data
    setLoading(true)

    api
      .post('/users/authenticate', {
        email,
        password,
        domainName,
      })
      .then((response) => {
        setErrorMessage(null)
        setCookie(
          undefined,
          SPIDER_LINK_ACCESS_TOKEN,
          response.data.data.token,
          {
            maxAge: 60 * 60 * 24 * 7, // 7 days
            path: '/',
          },
        )
        setSuccessMessage(true)
        window.location.href = '/admin'
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
    signIn,
    methods,
  }
}
