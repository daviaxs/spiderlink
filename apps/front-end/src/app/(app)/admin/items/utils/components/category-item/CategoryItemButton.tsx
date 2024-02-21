import { ReactNode } from 'react'
import { CategoryItemButtonStyle } from './CategoryItem.style'

interface CategoryItemButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  as?: keyof JSX.IntrinsicElements
}

export function CategoryItemButton({
  children,
  as,
  ...props
}: CategoryItemButtonProps) {
  return (
    <CategoryItemButtonStyle as={as} {...props}>
      {children}
    </CategoryItemButtonStyle>
  )
}
