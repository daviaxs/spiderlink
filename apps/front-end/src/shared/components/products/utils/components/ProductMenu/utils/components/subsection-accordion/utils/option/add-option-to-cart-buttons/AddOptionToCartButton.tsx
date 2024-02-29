import React, { HTMLAttributes, ReactNode } from 'react'
import { AddOptionToCartButtonStyle } from './AddOptionToCartButton.style'

interface AddOptionToCartButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  disabled?: boolean
}

export function AddOptionToCartButton({
  children,
  disabled,
  ...props
}: AddOptionToCartButtonProps) {
  return (
    <AddOptionToCartButtonStyle
      disabled={disabled}
      className="action-button"
      {...props}
    >
      {children}
    </AddOptionToCartButtonStyle>
  )
}
