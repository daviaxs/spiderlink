import { Text } from '@/shared/components/text/Text'
import { roboto } from '@/shared/style/theme/fonts'
import { ReactNode } from 'react'

interface OptionPrice {
  children: ReactNode
}

export function OptionPrice({ children }: OptionPrice) {
  return (
    <Text
      size={18}
      $weight="500"
      className={`${roboto.className} option-price`}
      $whiteSpace="nowrap"
    >
      {children}
    </Text>
  )
}
