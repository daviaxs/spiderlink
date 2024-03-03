import { UserRound } from 'lucide-react'
import { InputContainer } from './Inputs.style'

interface NameInputProps {
  name: string
  placeholder?: string
}

export function NameInput({ placeholder, name }: NameInputProps) {
  return (
    <InputContainer>
      <UserRound className="input-icon" />

      <input type="text" name={name} id={name} placeholder={placeholder} />
    </InputContainer>
  )
}
