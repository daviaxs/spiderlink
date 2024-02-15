import { InputType } from '../components/form/utils/InputIcons'
import { useState } from 'react'

export function useShowPassword({ type }: { type: InputType }) {
  const [showPassword, setShowPassword] = useState(false)

  const verifyInputType = type === 'password' && showPassword ? 'text' : type

  function toggleShowPassword() {
    setShowPassword(!showPassword)
  }

  return {
    verifyInputType,
    toggleShowPassword,
    showPassword,
    setShowPassword,
  }
}
