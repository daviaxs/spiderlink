import React, { HTMLAttributes, ReactNode } from 'react'
import { AddOptionToCartButtonStyle } from './AddOptionToCartButton.style'

interface AddOptionToCartButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function AddOptionToCartButton({
  children,
  ...props
}: AddOptionToCartButtonProps) {
  return (
    <AddOptionToCartButtonStyle className="action-button" {...props}>
      {children}
    </AddOptionToCartButtonStyle>
  )
}
