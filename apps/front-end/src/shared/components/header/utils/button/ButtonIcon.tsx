import { ReactNode } from 'react'
import { IconContainer } from './Button.style'

export function ButtonIcon({ children }: { children: ReactNode }) {
  return <IconContainer>{children}</IconContainer>
}
