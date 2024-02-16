import { Text } from '@/shared/components/text/Text'
import { ReactNode } from 'react'

export function ButtonTitle({ children }: { children: ReactNode }) {
  return (
    <Text size={20} $weight="800" $letterSpacing="0.8px" $whiteSpace="nowrap">
      {children}
    </Text>
  )
}
