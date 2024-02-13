import { ReactNode } from 'react'
import { IconStyle } from './InfoBadge.style'

interface InfoBadgeProps {
  children: ReactNode
}

export function IconBadge({ children }: InfoBadgeProps) {
  return <IconStyle className="icon">{children}</IconStyle>
}
