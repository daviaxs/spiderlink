import { Text } from '@/shared/components/text/Text'
import { ReactNode } from 'react'

export function CardTitle({ children }: { children: ReactNode }) {
  return (
    <Text size={24} $weight="700" fontVariant="all-small-caps">
      {children}
    </Text>
  )
}
