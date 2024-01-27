import { ReactNode } from 'react'
import { ButtonStyle } from './Button.style'

export function Button({ children }: { children: ReactNode }) {
  return <ButtonStyle>{children}</ButtonStyle>
}
