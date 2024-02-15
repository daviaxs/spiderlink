import { FormContentStyle } from './Form.style'

interface FormContentProps extends React.HTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

export function FormContent({ children, ...props }: FormContentProps) {
  return <FormContentStyle {...props}>{children}</FormContentStyle>
}
