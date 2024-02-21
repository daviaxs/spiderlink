import { ReactNode } from 'react'
import { CategoryItemActionsStyle } from './CategoryItem.style'

export function CategoryItemActions({ children }: { children: ReactNode }) {
  return <CategoryItemActionsStyle>{children}</CategoryItemActionsStyle>
}
