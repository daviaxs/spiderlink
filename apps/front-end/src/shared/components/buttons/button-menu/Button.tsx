import { ReactNode } from 'react'
import { ButtonStyle } from './Button.style'

export interface ButtonProps {
  children: ReactNode
  as?: keyof JSX.IntrinsicElements
  toggleTheme?: () => void
}

export function Button({ children, toggleTheme, as }: ButtonProps) {
  return (
    <ButtonStyle onClick={toggleTheme} as={as}>
      {children}
    </ButtonStyle>
  )
}
