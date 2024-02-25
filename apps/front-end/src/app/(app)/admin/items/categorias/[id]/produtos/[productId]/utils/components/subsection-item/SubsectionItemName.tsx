import { Text } from '@/shared/components/text/Text'
import { ReactNode } from 'react'
import { SubsectionItemNameStyle } from './SubsectionItem.style'

export function SubsectionItemName({ children }: { children: ReactNode }) {
  return (
    <SubsectionItemNameStyle>
      <Text size={16} $weight="600">
        {children}
      </Text>
    </SubsectionItemNameStyle>
  )
}
