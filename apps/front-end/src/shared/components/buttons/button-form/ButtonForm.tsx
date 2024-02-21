import { roboto } from '@/shared/style/theme/fonts'
import { ButtonStyle, ButtonStyleProps } from './ButtonForm.style'

type ButtonProps = ButtonStyleProps & {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export function ButtonForm({
  children,
  disabled = false,
  className,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <ButtonStyle
      {...props}
      className={`${roboto.className} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonStyle>
  )
}
