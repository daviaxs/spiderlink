import { Text } from '@/shared/components/text/Text'
import { roboto } from '@/shared/style/theme/fonts'
import { ReactNode } from 'react'

interface ProductDescriptionProps {
  children: ReactNode
}

export function ProductDescription({ children }: ProductDescriptionProps) {
  return (
    <Text
      size={14}
      $lineheight="120%"
      $textalign="left"
      className={`product-description ${roboto.className}`}
    >
      {children}
    </Text>
  )
}
