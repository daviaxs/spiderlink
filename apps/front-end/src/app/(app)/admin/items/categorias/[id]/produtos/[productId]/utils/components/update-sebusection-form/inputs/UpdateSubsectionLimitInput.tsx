import { Text } from '@/shared/components/text/Text'
import { InputRoot } from '../../Inputs.style'
import { KeyboardEvent, useContext, useEffect, useState } from 'react'
import { Subsection, SubsectionsContext } from '@/shared/contexts/Subsections'

interface UpdateSubsectionLimitInputProps {
  title: string
  name: string
  placeholder?: string
  subsectionId: string
}

export function UpdateSubsectionLimitInput({
  title,
  name,
  placeholder,
  subsectionId,
}: UpdateSubsectionLimitInputProps) {
  const { subsections } = useContext(SubsectionsContext)
  const [defaultValue, setDefaultValue] = useState<number>(0)

  useEffect(() => {
    const subsection = subsections.find(
      (subsection) => subsection.id === subsectionId,
    )

    if (subsection) {
      setDefaultValue(subsection[name as keyof Subsection] as number)
    }
  }, [name, subsectionId, subsections])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)

    if (value.toString().length > 2) {
      setDefaultValue(99)
      return
    }

    setDefaultValue(Number(event.target.value))
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    const keyCode = event.key
    const keyValue = String.fromCharCode(Number(keyCode))
    if (!/^\d+$/.test(keyValue)) event.preventDefault()
  }

  return (
    <InputRoot>
      <Text as="h3" size={18}>
        {title}
      </Text>

      <input
        type="text"
        name={name}
        value={defaultValue}
        onChange={handleChange}
        placeholder={placeholder}
        onKeyUp={handleKeyPress}
      />
    </InputRoot>
  )
}
