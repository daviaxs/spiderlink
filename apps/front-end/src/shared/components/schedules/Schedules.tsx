import { SchedulesRoot } from './Schedules.style'
import { ReactNode } from 'react'

export function Schedules({ children }: { children: ReactNode }) {
  return <SchedulesRoot>{children}</SchedulesRoot>
}
