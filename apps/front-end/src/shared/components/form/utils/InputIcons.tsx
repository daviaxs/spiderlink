import { KeyRound, Mail, UserRound } from 'lucide-react'

export type InputType = 'text' | 'email' | 'password'

export const InputIcons = {
  text: <UserRound size={30} className="iconForm" />,
  email: <Mail size={30} className="iconForm" />,
  password: <KeyRound size={30} className="iconForm" />,
  button: null,
}

export const getIcon = (type: InputType) => InputIcons[type]
