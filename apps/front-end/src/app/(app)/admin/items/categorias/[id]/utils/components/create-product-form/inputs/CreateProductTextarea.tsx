import { Text } from '@/shared/components/text/Text'
import { InputRoot } from '../ProductForm.style'

interface CreateProductTextareaProps {
  title: string
  name: string
  placeholder?: string
}

export function CreateProductTextarea({
  title,
  name,
  placeholder,
}: CreateProductTextareaProps) {
  return (
    <InputRoot>
      <Text as="h3" size={18}>
        {title}
      </Text>
      <textarea name={name} placeholder={placeholder} />
    </InputRoot>
  )
}
