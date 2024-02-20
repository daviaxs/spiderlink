'use client'

import { SchedulesContext } from '@/shared/contexts/Schedules'
import {
  DayWeekContent,
  DayWeekRoot,
  DayWeekTime,
  DayWeekTimeInput,
  DayWeekTimes,
  SchedulesRoot,
} from './Schedules.style'
import { useContext } from 'react'
import { Text } from '@/shared/components/text/Text'
import { DayScheduleForm } from './utils/components/update-schedule-form/UpdateScheduleForm'

export default function HorariosPage() {
  const { dom, qua, qui, sab, seg, sex, ter } = useContext(SchedulesContext)

  const days: {
    name: 'seg' | 'ter' | 'qua' | 'qui' | 'sex' | 'sab' | 'dom'
    schedule: { inicio: string; termino: string; fechado: boolean }
  }[] = [
    { name: 'seg', schedule: seg },
    { name: 'ter', schedule: ter },
    { name: 'qua', schedule: qua },
    { name: 'qui', schedule: qui },
    { name: 'sex', schedule: sex },
    { name: 'sab', schedule: sab },
    { name: 'dom', schedule: dom },
  ]

  return (
    <SchedulesRoot>
      {days.map((day) => (
        <DayWeekRoot key={day.name}>
          <DayWeekContent>
            <Text as="h2" $weight="600" size={24}>
              {day.name}
            </Text>

            {day.schedule.fechado ? (
              <DayWeekTime>
                <Text size={24} as="h2" $weight="600" className="closedText">
                  Fechado
                </Text>
              </DayWeekTime>
            ) : (
              <DayWeekTimes>
                <DayWeekTime>
                  <Text $weight="600" size={16}>
                    Inicio
                  </Text>

                  <DayWeekTimeInput>{day.schedule.inicio}</DayWeekTimeInput>
                </DayWeekTime>

                <span className="separator">-</span>

                <DayWeekTime>
                  <Text $weight="600" size={16}>
                    Termino
                  </Text>

                  <DayWeekTimeInput>{day.schedule.termino}</DayWeekTimeInput>
                </DayWeekTime>
              </DayWeekTimes>
            )}
          </DayWeekContent>

          <DayScheduleForm dayName={day.name} schedule={day.schedule} />
        </DayWeekRoot>
      ))}
    </SchedulesRoot>
  )
}
