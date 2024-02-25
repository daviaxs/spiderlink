import { ReactNode } from 'react'
import { SubsectionItemButtonStyle } from './SubsectionItem.style'

interface SubsectionItemButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  as?: keyof JSX.IntrinsicElements
}

export function SubsectionItemButton({
  children,
  as,
  ...props
}: SubsectionItemButtonProps) {
  return (
    <SubsectionItemButtonStyle as={as} {...props}>
      {children}
    </SubsectionItemButtonStyle>
  )
}
