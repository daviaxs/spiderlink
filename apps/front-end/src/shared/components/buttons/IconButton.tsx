import { ReactNode } from 'react'
import { IconButtonStyle } from './IconButton.style'

export function IconButton({ children }: { children: ReactNode }) {
  return <IconButtonStyle>{children}</IconButtonStyle>
}
