'use client'

import { ReactNode } from 'react'
import { InputContainer } from './Form.style'
import { InputType, getIcon } from './utils/InputIcons'
import { ShowPasswordIcons } from './utils/ShowPasswordIcons'
import { useShowPassword } from '@/shared/hooks/useShowPassword'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string
  type: InputType
  icon?: ReactNode
  placeholder?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any
}

export function FormInput({
  name,
  type,
  placeholder,
  register,
  ...props
}: FormInputProps) {
  const { toggleShowPassword, verifyInputType, showPassword } = useShowPassword(
    { type },
  )

  return (
    <InputContainer>
      {getIcon(type)}

      <input
        type={verifyInputType}
        name={name}
        placeholder={placeholder}
        {...register}
        {...props}
      />

      {type === 'password' && (
        <span onClick={toggleShowPassword} className="showPassword">
          {showPassword ? ShowPasswordIcons.eye : ShowPasswordIcons.eyeOff}
        </span>
      )}
    </InputContainer>
  )
}
