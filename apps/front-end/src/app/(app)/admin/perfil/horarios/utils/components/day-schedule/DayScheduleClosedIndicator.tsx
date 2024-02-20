import { ClosedIndicator } from './DaySchedule.style'
import { useState } from 'react'

interface DayScheduleClosedIndicatorProps
  extends React.HTMLProps<HTMLInputElement> {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any
}

export function DayScheduleClosedIndicator({
  name,
  register,
  ...props
}: DayScheduleClosedIndicatorProps) {
  const [inputValue, setInputValue] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.checked)
  }

  const handleClick = () => {
    setInputValue(!inputValue)
  }

  return (
    <ClosedIndicator>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={inputValue}
        onChange={handleChange}
        onClick={handleClick}
        {...register}
        {...props}
      />

      <label htmlFor={name} className="inputLabel">
        Fechado
      </label>
    </ClosedIndicator>
  )
}
