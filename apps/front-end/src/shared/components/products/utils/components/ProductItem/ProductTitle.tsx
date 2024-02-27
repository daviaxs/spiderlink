import { Text } from '@/shared/components/text/Text'
import { ReactNode } from 'react'

interface ProductTitleProps {
  children: ReactNode
}

export function ProductTitle({ children }: ProductTitleProps) {
  return (
    <Text
      as="h2"
      size={24}
      $weight="600"
      $textalign="left"
      className="product-title"
    >
      {children}
    </Text>
  )
}
