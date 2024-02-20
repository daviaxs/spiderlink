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
        ? seg.termino
        : day === 'ter'
          ? ter.termino
          : day === 'qua'
            ? qua.termino
            : day === 'qui'
              ? qui.termino
              : day === 'sex'
                ? sex.termino
                : day === 'sab'
                  ? sab.termino
                  : dom.termino
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
