import { ReactNode } from 'react'
import { ButtonBadgeStyle } from './InfoBadge.style'

interface ButtonBadgeProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function ButtonBadge({ children }: ButtonBadgeProps) {
  return <ButtonBadgeStyle>{children}</ButtonBadgeStyle>
}
