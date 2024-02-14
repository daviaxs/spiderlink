import { useContext } from 'react'
import { SchedulesContext } from '../contexts/Schedules'

export function useGetSchedules() {
  const schedules = useContext(SchedulesContext)
  if (!schedules) {
    throw new Error('useGetSchedules must be used within a SchedulesProvider')
  }

  return schedules
}
