import { Text } from '@/shared/components/text/Text'
import { roboto } from '@/shared/style/theme/fonts'
import { ReactNode } from 'react'

export function ButtonSubTitle({ children }: { children: ReactNode }) {
  return (
    <Text
      size={24}
      $weight="900"
      className={`${roboto.className} button-sub-title`}
      fontVariant="small-caps"
    >
      {children}
    </Text>
  )
}
