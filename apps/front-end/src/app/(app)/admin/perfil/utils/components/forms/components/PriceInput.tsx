import { ChangeEvent } from 'react'
import { InputRoot } from './PriceInput.style'

interface PriceInputProps {
  name: string
  placeholder?: string
}

export function PriceInput({ name, placeholder }: PriceInputProps) {
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
