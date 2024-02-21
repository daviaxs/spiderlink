import { ReactNode } from 'react'
import { CategoryItemRoot as CategoryItemRootStyle } from './CategoryItem.style'

export function CategoryItemRoot({ children }: { children: ReactNode }) {
  return <CategoryItemRootStyle>{children}</CategoryItemRootStyle>
}
