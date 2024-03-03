import { InputMask } from '@react-input/mask'
import { useState } from 'react'
import { InputContainer } from './Inputs.style'
import { Phone } from 'lucide-react'

interface PhoneInputProps {
  name: string
  placeholder?: string
}

export function PhoneInput({ placeholder, name }: PhoneInputProps) {
  const [phone, setPhone] = useState('' as string)

  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPhone(event.target.value)
  }

  return (
    <InputContainer>
      <Phone className="input-icon" />

      <InputMask
        mask="(__) _____-____"
        replacement={{ _: /[0-9]/ }}
        name={name}
        id={name}
        placeholder={placeholder}
        type="text"
        value={phone}
        onChange={handlePhoneChange}
      />
    </InputContainer>
  )
}
