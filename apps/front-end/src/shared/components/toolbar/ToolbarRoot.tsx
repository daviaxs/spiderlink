import { ReactNode } from 'react'
import { ToolbarRootStyle } from './Toolbar.style'

interface ToolbarProps {
  children: ReactNode
}

export function ToolbarRoot({ children }: ToolbarProps) {
  return <ToolbarRootStyle>{children}</ToolbarRootStyle>
}
