import { ECOMMERCE_NAME } from '@/shared/constants/names'
import { ReactNode } from 'react'

export const metadata = {
  title: ECOMMERCE_NAME,
}

export default function AppLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
