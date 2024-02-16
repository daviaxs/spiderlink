import { ReactNode } from 'react'

interface CardButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function CardButton({ children }: CardButtonProps) {
  return <button className="cardButton">{children}</button>
}
