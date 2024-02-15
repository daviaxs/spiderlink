import { api } from '@/lib/axios'
import { destroyCookie } from 'nookies'
import { useEffect, useState } from 'react'
import { SPIDER_LINK_ACCESS_TOKEN } from '../constants/cookiesNames'
import { userAccesToken } from '../constants/cookiesValues'

export function useVerifyToken() {
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    (async () => {
      api
        .get('/token/verify', {
          headers: {
            Authorization: `Bearer ${userAccesToken}`,
          },
        })
        .then(() => {
          setSuccess(true)
        })
        .catch(() => {
          destroyCookie(null, SPIDER_LINK_ACCESS_TOKEN, { path: '/' })
          window.location.href = '/'
        })
    })()
  }, [])

  return { success }
}
