import { Text } from '@/shared/components/text/Text'
import { ReactNode } from 'react'

export function FieldTitle({ children }: { children: ReactNode }) {
  return (
    <Text as="h6" size={18} $weight="600">
      {children}
    </Text>
  )
}
