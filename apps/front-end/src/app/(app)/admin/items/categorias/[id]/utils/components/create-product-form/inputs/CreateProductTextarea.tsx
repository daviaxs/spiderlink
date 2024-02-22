import { Text } from '@/shared/components/text/Text'
import { InputRoot } from '../ProductForm.style'

interface CreateProductTextareaProps {
  title: string
  name: string
  placeholder?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any
}

export function CreateProductTextarea({
  title,
  name,
  placeholder,
  register,
}: CreateProductTextareaProps) {
  return (
    <InputRoot>
      <Text as="h3" size={18}>
        {title}
      </Text>
      <textarea name={name} placeholder={placeholder} {...register} />
    </InputRoot>
  )
}
