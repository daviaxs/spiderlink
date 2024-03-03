import { UserRound } from 'lucide-react'
import { InputContainer } from './Inputs.style'
import { ChangeEvent, useEffect, useState } from 'react'
import { SPIDER_LINK_USER_INFOS } from '@/shared/constants/names'
import { getLocalStorageItem } from '@/shared/functions/localStorage'

interface NameInputProps {
  name: string
  placeholder?: string
}

export function NameInput({ placeholder, name }: NameInputProps) {
  const [nameValue, setNameValue] = useState('' as string)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setNameValue(event.target.value)
  }

  useEffect(() => {
    const userInfos = getLocalStorageItem(SPIDER_LINK_USER_INFOS)

    const nameFromLocalStorage = userInfos?.nome as string

    if (nameFromLocalStorage) {
      setNameValue(nameFromLocalStorage)
    }
  }, [])

  return (
    <InputContainer>
      <UserRound className="input-icon" />

      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={nameValue}
      />
    </InputContainer>
  )
}
