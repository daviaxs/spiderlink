import { Text } from '@/shared/components/text/Text'
import { roboto } from '@/shared/style/theme/fonts'
import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <Text
      size={20}
      $weight="600"
      className={roboto.className}
      $whiteSpace="nowrap"
    >
      {children}
    </Text>
  )
}
