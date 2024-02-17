'use client'

import { useVerifyToken } from '@/shared/hooks/useVerifyToken'
import { ReactNode } from 'react'
import { LoadingPage } from './utils/loadingPage/LoadingPage'

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { success } = useVerifyToken()

  return <>{success ? children : <LoadingPage />}</>
}
