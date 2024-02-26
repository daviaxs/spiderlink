import { Text } from '@/shared/components/text/Text'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { InputRoot } from '@/shared/components/inputs/Inputs.style'
import { OptionsContext } from '@/shared/contexts/Options'

interface UpdateOptionInputProps {
  title: string
  name: string
  placeholder?: string
  optionId: string
}

export function UpdateOptionInput({
  title,
  name,
  placeholder,
  optionId,
}: UpdateOptionInputProps) {
  const { options } = useContext(OptionsContext)
  const [defaultValue, setDefaultValue] = useState('')

  useEffect(() => {
    const option = options.find((option) => option.id === optionId)

    if (option) {
      setDefaultValue(option.name)
    }
  }, [options, optionId, name])

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
        onChange={handleChange}
        placeholder={placeholder}
        value={defaultValue}
      />
    </InputRoot>
  )
}
