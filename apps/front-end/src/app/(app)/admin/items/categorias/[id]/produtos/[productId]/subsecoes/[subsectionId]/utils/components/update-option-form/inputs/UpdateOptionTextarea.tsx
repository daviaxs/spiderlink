import { Text } from '@/shared/components/text/Text'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { InputRoot } from '@/shared/components/inputs/Inputs.style'
import { OptionsContext } from '@/shared/contexts/Options'

interface UpdateOptionTextareaProps {
  title: string
  name: string
  placeholder?: string
  optionId: string
}

export function UpdateOptionTextarea({
  title,
  name,
  placeholder,
  optionId,
}: UpdateOptionTextareaProps) {
  const [defaultValue, setDefaultValue] = useState('')
  const { options } = useContext(OptionsContext)

  useEffect(() => {
    const option = options.find((option) => option.id === optionId)

    if (option) {
      setDefaultValue(option.description)
    }
  }, [optionId, options])

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setDefaultValue(event.target.value)
  }

  return (
    <InputRoot>
      <Text as="h3" size={18}>
        {title}
      </Text>
      <textarea
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        value={defaultValue}
      />
    </InputRoot>
  )
}
