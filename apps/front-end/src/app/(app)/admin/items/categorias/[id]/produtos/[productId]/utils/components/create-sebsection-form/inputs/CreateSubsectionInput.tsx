import { Text } from '@/shared/components/text/Text'
import { InputRoot } from '../../Inputs.style'

interface CreateSubsectionInputProps {
  title: string
  name: string
  placeholder?: string
}

export function CreateSubsectionInput({
  title,
  name,
  placeholder,
}: CreateSubsectionInputProps) {
  return (
    <InputRoot>
      <Text as="h3" size={18}>
        {title}
      </Text>
      <input type="text" name={name} placeholder={placeholder} />
    </InputRoot>
  )
}
