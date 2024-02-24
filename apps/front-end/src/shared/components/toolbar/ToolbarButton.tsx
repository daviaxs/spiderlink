import { ReactNode } from 'react'
import { ToolbarButtonStyle } from './Toolbar.style'

interface ToolbarButtonProps {
  children: ReactNode
}

export function ToolbarButton({ children, ...props }: ToolbarButtonProps) {
  return <ToolbarButtonStyle {...props}>{children}</ToolbarButtonStyle>
}
