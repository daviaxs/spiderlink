import { Text } from '@/shared/components/text/Text'
import { ReactNode } from 'react'

export function FieldDescription({ children }: { children: ReactNode }) {
  return (
    <Text size={16} $textalign="right" $weight="600">
      {children}
    </Text>
  )
}
