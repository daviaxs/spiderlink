import { ChangeEvent } from 'react'
import { Text } from '@/shared/components/text/Text'
import { InputRoot } from '../ProductForm.style'

interface CreateProductPriceProps {
  title: string
  name: string
  placeholder?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any
}

export function CreateProductPrice({
  title,
  name,
  placeholder,
  register,
}: CreateProductPriceProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let numericValue = event.target.value.replace(/[^0-9]/g, '')

    if (numericValue.length === 0) {
      numericValue = '0'
    }

    if (numericValue.length > 10) {
      numericValue = numericValue.slice(0, 10)
    }

    if (numericValue !== '') {
      event.target.value = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(parseInt(numericValue) / 100)
    }
  }

  return (
    <InputRoot>
      <Text as="h3" size={18}>
        {title}
      </Text>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        {...register}
      />
    </InputRoot>
  )
}
