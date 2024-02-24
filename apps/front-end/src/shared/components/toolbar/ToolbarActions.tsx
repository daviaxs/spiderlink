import { ReactNode } from 'react'
import { ToolbarActionsStyle } from './Toolbar.style'

export function ToolbarActions({ children }: { children: ReactNode }) {
  return <ToolbarActionsStyle>{children}</ToolbarActionsStyle>
}
