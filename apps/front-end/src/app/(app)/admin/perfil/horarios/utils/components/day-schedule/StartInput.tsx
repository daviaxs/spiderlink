import { Text } from '@/shared/components/text/Text'
import { HourInput } from '../hour-input/HourInput'
import { useContext, useEffect, useState } from 'react'
import { SchedulesContext } from '@/shared/contexts/Schedules'

interface StartInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any
  name?: string
  day?: string
  type: string
}

export function StartInput({ register, name, type, day }: StartInputProps) {
  const { dom, qua, qui, sab, seg, sex, ter } = useContext(SchedulesContext)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const schedule =
      day === 'seg'
        ? seg.inicio
        : day === 'ter'
          ? ter.inicio
          : day === 'qua'
            ? qua.inicio
            : day === 'qui'
              ? qui.inicio
              : day === 'sex'
                ? sex.inicio
                : day === 'sab'
                  ? sab.inicio
                  : dom.inicio
    setInputValue(schedule)
  }, [day, dom, qua, qui, sab, seg, sex, ter])

  return (
    <div className="scheduleInput">
      <Text size={14} $weight="600">
        inicio
      </Text>

      <HourInput
        name={name}
        type={type}
        placeholder={inputValue}
        register={register}
      />
    </div>
  )
}
