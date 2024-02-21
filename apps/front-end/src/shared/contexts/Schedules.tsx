import { ReactNode, createContext, useEffect, useMemo, useState } from 'react'

export type Schedule = {
  inicio: string
  termino: string
  fechado: boolean
}

export type DaysWeek = {
  seg: Schedule
  ter: Schedule
  qua: Schedule
  qui: Schedule
  sex: Schedule
  sab: Schedule
  dom: Schedule
}

type Day = keyof DaysWeek

export const SchedulesContext = createContext({} as DaysWeek)

export function SchedulesProvider({ children }: { children: ReactNode }) {
  const defaultDays = {
    inicio: '0000',
    termino: '0000',
    fechado: false,
  }

  const days: Day[] = useMemo(
    () => ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'],
    [],
  )

  const [schedules, setSchedules] = useState(
    days.reduce(
      (acc, day) => ({
        ...acc,
        [day]: defaultDays,
      }),
      {} as DaysWeek,
    ),
  )

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/schedules/${process.env.NEXT_PUBLIC_DOMAIN_ID}`,
      {
        next: {
          revalidate: 1800, // 30 minutes
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        const scheduleData = data.schedule
        const newSchedules: DaysWeek = {} as DaysWeek

        for (const day of days) {
          newSchedules[day] = {
            inicio: scheduleData[day].inicio,
            termino: scheduleData[day].termino,
            fechado: scheduleData[day].fechado,
          }
        }

        setSchedules(newSchedules)
      })
  }, [days])

  return (
    <SchedulesContext.Provider value={schedules}>
      {children}
    </SchedulesContext.Provider>
  )
}
