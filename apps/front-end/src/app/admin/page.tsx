'use client'

import { useVerifyToken } from '@/shared/hooks/useVerifyToken'
import { LoadingPage } from './utils/loadingPage/LoadingPage'

export default function AdminPage() {
  const { success } = useVerifyToken()

  return success ? <div>Admin Painel</div> : <LoadingPage />
}
