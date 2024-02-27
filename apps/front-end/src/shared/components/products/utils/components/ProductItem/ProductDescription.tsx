import { Text } from '@/shared/components/text/Text'
import { ReactNode } from 'react'

interface ProductDescriptionProps {
  children: ReactNode
}

export function ProductDescription({ children }: ProductDescriptionProps) {
  return (
    <Text size={14} className="product-description" $lineheight="120%">
      {children}
    </Text>
  )
}
