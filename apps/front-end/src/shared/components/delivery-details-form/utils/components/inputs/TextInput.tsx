import { InputContainer } from './Inputs.style'
import { ChangeEvent, InputHTMLAttributes } from 'react'

interface NameInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  placeholder?: string
  value: string
}

export function TextInput({
  placeholder,
  name,
  value,
  ...props
}: NameInputProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    value = event.target.value
  }

  return (
    <InputContainer>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        {...props}
      />
    </InputContainer>
  )
}
