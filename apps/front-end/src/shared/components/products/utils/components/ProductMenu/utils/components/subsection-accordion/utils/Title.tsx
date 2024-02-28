import { Text } from '@/shared/components/text/Text'
import { roboto } from '@/shared/style/theme/fonts'
import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
  size?: number
}

export function Title({ children, size = 20 }: TitleProps) {
  return (
    <Text
      size={size}
      $weight="600"
      className={roboto.className}
      $whiteSpace="nowrap"
      style={{ gap: '0.35rem', display: 'flex' }}
    >
      {children}
    </Text>
  )
}
