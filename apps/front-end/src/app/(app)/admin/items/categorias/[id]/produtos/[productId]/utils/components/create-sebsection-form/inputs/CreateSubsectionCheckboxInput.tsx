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
  const [inputValue, setInputValue] = useState<boolean>(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.checked)
  }

  return (
    <CheckboxRoot>
      {!inputValue && <input type="hidden" name={name} value="false" />}

      <input
        type="checkbox"
        name={name}
        id={name}
        onChange={handleChange}
        value={inputValue.toString()}
        checked={inputValue}
      />

      <label className="inputLabel" htmlFor={name}>
        {title}
      </label>
    </CheckboxRoot>
  )
}
