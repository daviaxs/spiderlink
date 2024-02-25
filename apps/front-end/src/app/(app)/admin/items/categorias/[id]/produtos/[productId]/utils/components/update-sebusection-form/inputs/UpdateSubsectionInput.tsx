import { Text } from '@/shared/components/text/Text'
import { InputRoot } from '../../Inputs.style'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { Subsection, SubsectionsContext } from '@/shared/contexts/Subsections'

interface UpdateSubsectionInputProps {
  title: string
  name: string
  placeholder?: string
  subsectionId: string
}

export function UpdateSubsectionInput({
  title,
  name,
  placeholder,
  subsectionId,
}: UpdateSubsectionInputProps) {
  const { subsections } = useContext(SubsectionsContext)
  const [defaultValue, setDefaultValue] = useState('')

  useEffect(() => {
    const subsection = subsections.find(
      (subsection) => subsection.id === subsectionId,
    )

    if (subsection) {
      setDefaultValue(subsection[name as keyof Subsection] as string)
    }
  }, [name, subsectionId, subsections])

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setDefaultValue(event.target.value)
  }

  return (
    <InputRoot>
      <Text as="h3" size={18}>
        {title}
      </Text>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={defaultValue}
      />
    </InputRoot>
  )
}
