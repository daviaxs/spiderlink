import { ButtonRoot } from './Button.style'
import { ReactNode } from 'react'

export function Button({ children }: { children: ReactNode }) {
  return <ButtonRoot>{children}</ButtonRoot>
}
