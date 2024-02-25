import { ECOMMERCE_NAME } from '@/shared/constants/names'
import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: ECOMMERCE_NAME,
  description: ECOMMERCE_NAME,
}

export default function AppLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
