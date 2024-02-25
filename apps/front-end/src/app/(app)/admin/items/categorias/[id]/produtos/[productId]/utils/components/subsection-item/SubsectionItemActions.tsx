import { ReactNode } from 'react'
import { SubsectionItemActionsStyle } from './SubsectionItem.style'

export function SubsectionItemActions({ children }: { children: ReactNode }) {
  return <SubsectionItemActionsStyle>{children}</SubsectionItemActionsStyle>
}
