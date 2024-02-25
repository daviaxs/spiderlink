import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { CheckboxRoot } from '../../Inputs.style'
import { Subsection, SubsectionsContext } from '@/shared/contexts/Subsections'

interface UpdateSubsectionCheckboxInputProps {
  title: string
  name: string
  subsectionId: string
}

export function UpdateSubsectionCheckboxInput({
  name,
  title,
  subsectionId,
}: UpdateSubsectionCheckboxInputProps) {
  const { subsections } = useContext(SubsectionsContext)
  const [inputValue, setInputValue] = useState<boolean>(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.checked)
  }

  useEffect(() => {
    const subsection = subsections.find(
      (subsection) => subsection.id === subsectionId,
    )

    if (subsection) {
      setInputValue(!!subsection[name as keyof Subsection])
    }
  }, [name, subsectionId, subsections])

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
