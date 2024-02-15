import { signInUserData } from '@/shared/schemas/SignInSchema'
import { useFormContext } from 'react-hook-form'
import { Text } from '../text/Text'

export function ErrorMessage({ name }: { name: keyof signInUserData }) {
  const {
    formState: { errors },
  } = useFormContext()

  return (
    <Text size={16}>{errors[name] ? <>{errors[name]?.message}</> : null}</Text>
  )
}
