import { ReactNode } from 'react'
import { Root } from './InfoBadge.style'

export function InfoBadge({ children }: { children: ReactNode }) {
  return <Root>{children}</Root>
}
