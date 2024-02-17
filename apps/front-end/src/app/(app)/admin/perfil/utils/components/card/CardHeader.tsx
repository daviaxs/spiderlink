import { ReactNode } from 'react'
import { CardHeaderStyle } from './Card.style'

export function CardHeader({ children }: { children: ReactNode }) {
  return <CardHeaderStyle>{children}</CardHeaderStyle>
}
