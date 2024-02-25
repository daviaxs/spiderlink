import { Text } from '@/shared/components/text/Text'
import { InputRoot } from './Inputs.style'

interface InputTextProps {
  title: string
  name: string
  placeholder?: string
}

export function InputText({ title, name, placeholder }: InputTextProps) {
  return (
    <InputRoot>
      <Text as="h3" size={18}>
        {title}
      </Text>

      <input type="text" name={name} placeholder={placeholder} />
    </InputRoot>
  )
}
