import { SchedulesHeader as SchedulesHeaderComponent } from './Schedules.style'
import { ReactNode } from 'react'

export function SchedulesHeader({ children }: { children: ReactNode }) {
  return <SchedulesHeaderComponent>{children}</SchedulesHeaderComponent>
}
