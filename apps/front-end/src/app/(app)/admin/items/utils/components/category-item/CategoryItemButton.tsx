import { ReactNode } from 'react'
import { CategoryItemButtonStyle } from './CategoryItem.style'

interface CategoryItemButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function CategoryItemButton({
  children,
  ...props
}: CategoryItemButtonProps) {
  return (
    <CategoryItemButtonStyle {...props}>{children}</CategoryItemButtonStyle>
  )
}
