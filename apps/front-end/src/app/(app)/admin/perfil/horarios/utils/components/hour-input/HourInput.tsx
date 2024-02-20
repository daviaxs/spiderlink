'use client'

import { InputMask } from '@react-input/mask'
import { HourInputStyle } from '../hour-input/HourInput.style'
import { useState } from 'react'

interface HourInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any
  type: string
}

export function HourInput({ name, register, type, ...props }: HourInputProps) {
  const [inputValue, setInputValue] = useState('')

  const modify = (value: string) => {
    const primary = value.slice(0, 2)
    const secondary = value.slice(2)

    if (parseInt(primary) > 23) {
      value = '23' + secondary
    }

    if (parseInt(secondary) > 59) {
      value = primary + '59'
    }

    setInputValue(value)
    return value
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <HourInputStyle>
      <InputMask
        mask="____"
        replacement={{ _: /\d/ }}
        type={type}
        name={name}
        value={inputValue}
        onChange={handleChange}
        modify={modify}
        placeholder="00:00"
        {...register}
        {...props}
      />
    </HourInputStyle>
  )
}
