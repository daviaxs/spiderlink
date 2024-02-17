import { KeyRound, Mail } from 'lucide-react'

export type InputType = 'text' | 'email' | 'password'

export const InputIcons = {
  text: null,
  email: <Mail size={30} className="iconForm" />,
  password: <KeyRound size={30} className="iconForm" />,
  button: null,
}

export const getIcon = (type: InputType) => InputIcons[type]
