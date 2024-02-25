import { ReactNode } from 'react'
import { SubsectionItemRoot as SubsectionItemRootStyle } from './SubsectionItem.style'

export function SubsectionItemRoot({ children }: { children: ReactNode }) {
  return <SubsectionItemRootStyle>{children}</SubsectionItemRootStyle>
}
