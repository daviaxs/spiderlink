import { Text } from '@/shared/components/text/Text'
import { InputRoot } from './Inputs.style'
import { KeyboardEvent, useState } from 'react'

interface CreateSubsectionLimitInputProps {
  title: string
  name: string
  placeholder?: string
}

export function CreateSubsectionLimitInput({
  title,
  name,
  placeholder,
}: CreateSubsectionLimitInputProps) {
  const [inputValue, setInputValue] = useState(0)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)

    if (value.toString().length > 2) {
      setInputValue(99)
      return
    }

    setInputValue(Number(event.target.value))
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    const keyCode = event.key
    const keyValue = String.fromCharCode(Number(keyCode))
    if (!/^\d+$/.test(keyValue)) event.preventDefault()
  }

  return (
    <InputRoot>
      <Text as="h3" size={18}>
        {title}
      </Text>

      <input
        type="text"
        name={name}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        onKeyUp={handleKeyPress}
      />
    </InputRoot>
  )
}
