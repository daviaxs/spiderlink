import { Text } from '@/shared/components/text/Text'
import { InputRoot } from '../ProductForm.style'

interface CreateProductInputProps {
  title: string
  name: string
  placeholder?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any
}

export function CreateProductInput({
  title,
  name,
  placeholder,
  register,
}: CreateProductInputProps) {
  return (
    <InputRoot>
      <Text as="h3" size={18}>
        {title}
      </Text>
      <input type="text" name={name} placeholder={placeholder} {...register} />
    </InputRoot>
  )
}
