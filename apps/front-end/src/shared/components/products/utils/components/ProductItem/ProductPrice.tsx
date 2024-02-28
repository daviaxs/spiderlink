import { Text } from '@/shared/components/text/Text'
import { roboto } from '@/shared/style/theme/fonts'
import { ReactNode } from 'react'

interface ProductPriceProps {
  children: ReactNode
}

export function ProductPrice({ children }: ProductPriceProps) {
  return (
    <Text
      size={16}
      $weight="600"
      $textalign="left"
      className={`product-price ${roboto.className}`}
    >
      A partir de {children}
    </Text>
  )
}
