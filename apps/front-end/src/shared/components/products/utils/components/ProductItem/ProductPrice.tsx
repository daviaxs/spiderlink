import { Text } from '@/shared/components/text/Text'
import { ReactNode } from 'react'

interface ProductPriceProps {
  children: ReactNode
}

export function ProductPrice({ children }: ProductPriceProps) {
  return (
    <Text size={16} $weight="500">
      A partir de {children}
    </Text>
  )
}
