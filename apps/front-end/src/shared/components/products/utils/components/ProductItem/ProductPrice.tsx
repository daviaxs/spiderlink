import { Text } from '@/shared/components/text/Text'
import { ReactNode } from 'react'

interface ProductPriceProps {
  children: ReactNode
}

export function ProductPrice({ children }: ProductPriceProps) {
  return (
    <Text size={16} $weight="600" className="product-price" $textalign="left">
      A partir de {children}
    </Text>
  )
}
