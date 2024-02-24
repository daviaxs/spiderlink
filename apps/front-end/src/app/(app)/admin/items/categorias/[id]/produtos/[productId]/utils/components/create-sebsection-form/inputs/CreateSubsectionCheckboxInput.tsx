import { ChangeEvent, useState } from 'react'
import { CheckboxRoot } from './Inputs.style'

interface CreateSubsectionCheckboxInputProps {
  title: string
  name: string
}

export function CreateSubsectionCheckboxInput({
  name,
  title,
}: CreateSubsectionCheckboxInputProps) {
  const [inputValue, setInputValue] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.checked)
  }

  return (
    <CheckboxRoot>
      <input
        type="checkbox"
        name={name}
        id={name}
        onChange={handleChange}
        checked={inputValue}
      />

      <label className="inputLabel" htmlFor={name}>
        {title}
      </label>
    </CheckboxRoot>
  )
}
