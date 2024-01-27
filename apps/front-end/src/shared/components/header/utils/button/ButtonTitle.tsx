import { Text } from '@/shared/components/text/Text'
import { roboto } from '@/shared/style/theme/fonts'
import { ReactNode } from 'react'

export function ButtonTitle({ children }: { children: ReactNode }) {
  return (
    <Text size={20} $weight="900" className={roboto.className}>
      {children}
    </Text>
  )
}
