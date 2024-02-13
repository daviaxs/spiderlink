import { TextsBadgeStyle } from './InfoBadge.style'
import { ReactNode } from 'react'

interface TextsBadgeProps {
  children: ReactNode
}

export function TextsBadge({ children }: TextsBadgeProps) {
  return <TextsBadgeStyle>{children}</TextsBadgeStyle>
}
