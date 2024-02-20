import { ReactNode } from 'react'
import { ScheduleFormContent } from './DaySchedule.style'

export function DayScheduleFormContent({ children }: { children: ReactNode }) {
  return <ScheduleFormContent>{children}</ScheduleFormContent>
}
