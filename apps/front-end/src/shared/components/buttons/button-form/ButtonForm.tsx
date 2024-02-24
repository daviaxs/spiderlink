import { roboto } from '@/shared/style/theme/fonts'
import { ButtonStyle, ButtonStyleProps } from './ButtonForm.style'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonStyleProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
    className?: string
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void
    as?: keyof JSX.IntrinsicElements
  }

export function ButtonForm({
  children,
  disabled = false,
  className,
  onClick,
  as,
  ...props
}: ButtonProps) {
  return (
    <ButtonStyle
      {...props}
      className={`${roboto.className} ${className}`}
      onClick={onClick}
      disabled={disabled}
      as={as}
    >
      {children}
    </ButtonStyle>
  )
}
