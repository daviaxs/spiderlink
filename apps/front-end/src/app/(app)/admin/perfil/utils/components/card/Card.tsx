import { ReactNode } from 'react'
import { CardRoot } from './Card.style'

export function Card({ children }: { children: ReactNode }) {
  return <CardRoot>{children}</CardRoot>
}
