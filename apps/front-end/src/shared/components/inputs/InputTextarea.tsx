import { Text } from '@/shared/components/text/Text'
import { InputRoot } from './Inputs.style'

interface InputTextareaProps {
  title: string
  name: string
  placeholder?: string
}

export function InputTextarea({
  title,
  name,
  placeholder,
}: InputTextareaProps) {
  return (
    <InputRoot>
      <Text as="h3" size={18}>
        {title}
      </Text>

      <textarea name={name} placeholder={placeholder} />
    </InputRoot>
  )
}
