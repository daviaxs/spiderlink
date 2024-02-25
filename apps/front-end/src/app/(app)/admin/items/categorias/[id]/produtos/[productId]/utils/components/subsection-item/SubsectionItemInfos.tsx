import { ReactNode } from 'react'
import { SubsectionItemInfos as SubsectionItemInfosStyle } from './SubsectionItem.style'

export function SubsectionItemInfos({ children }: { children: ReactNode }) {
  return <SubsectionItemInfosStyle>{children}</SubsectionItemInfosStyle>
}
