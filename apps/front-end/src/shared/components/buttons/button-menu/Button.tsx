import { ReactNode } from 'react'
import { ButtonStyle } from './Button.style'

export interface ButtonProps {
  children: ReactNode
  as?: keyof JSX.IntrinsicElements
  onClick?: () => void
}

export function Button({ children, onClick, as }: ButtonProps) {
  return (
    <ButtonStyle onClick={onClick} as={as}>
      {children}
    </ButtonStyle>
  )
}
