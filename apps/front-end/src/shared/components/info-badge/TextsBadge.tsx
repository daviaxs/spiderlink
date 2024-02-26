import { TextsBadgeStyle } from './InfoBadge.style'
import { HTMLAttributes, ReactNode } from 'react'

interface TextsBadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function TextsBadge({ children, ...props }: TextsBadgeProps) {
  return <TextsBadgeStyle {...props}>{children}</TextsBadgeStyle>
}
