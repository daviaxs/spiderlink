import { FieldRootStyle } from './Field.style'
import { ReactNode } from 'react'

export function FieldRoot({ children }: { children: ReactNode }) {
  return <FieldRootStyle>{children}</FieldRootStyle>
}
