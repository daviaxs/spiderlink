import { ReactNode } from 'react'
import { ButtonStyle } from './Button.style'

export interface ButtonProps {
  children: ReactNode
  toggleTheme?: () => void
}

export function Button({ children, toggleTheme }: ButtonProps) {
  return <ButtonStyle onClick={toggleTheme}>{children}</ButtonStyle>
}
