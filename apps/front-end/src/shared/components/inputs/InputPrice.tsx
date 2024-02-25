import { ChangeEvent } from 'react'
import { Text } from '@/shared/components/text/Text'
import { InputRoot } from './Inputs.style'

interface InputPriceProps {
  title: string
  name: string
  placeholder?: string
}

export function InputPrice({ title, name, placeholder }: InputPriceProps) {
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
        id={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </InputRoot>
  )
}
