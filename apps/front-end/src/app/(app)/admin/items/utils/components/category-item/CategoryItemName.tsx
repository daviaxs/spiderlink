import { Text } from '@/shared/components/text/Text'
import { ReactNode } from 'react'
import { CategoryItemNameStyle } from './CategoryItem.style'

export function CategoryItemName({ children }: { children: ReactNode }) {
  return (
    <CategoryItemNameStyle>
      <Text size={16} $weight="600">
        {children}
      </Text>
    </CategoryItemNameStyle>
  )
}
