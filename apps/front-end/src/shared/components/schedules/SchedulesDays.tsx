import { formatHour } from '@/shared/functions/formatHour'
import { Text } from '../text/Text'
import {
  SchedulesDay,
  SchedulesDays as SchedulesDaysComponent,
  Separator,
} from './Schedules.style'
import { inter } from '@/shared/style/theme/fonts'
import { Fragment, useContext } from 'react'
import { SchedulesContext } from '@/shared/contexts/Schedules'

export function SchedulesDays() {
  const { seg, ter, qua, qui, sex, sab, dom } = useContext(SchedulesContext)

  const days = [
    { name: 'seg', schedule: seg },
    { name: 'ter', schedule: ter },
    { name: 'qua', schedule: qua },
    { name: 'qui', schedule: qui },
    { name: 'sex', schedule: sex },
    { name: 'sab', schedule: sab },
    { name: 'dom', schedule: dom },
  ]

  return (
    <SchedulesDaysComponent>
      {days.map((day) => (
        <Fragment key={day.name}>
          <SchedulesDay>
            <Text
              as="h3"
              size={24}
              className={inter.className}
              fontVariant="small-caps"
            >
              {day.name}
            </Text>

            <Text size={18} $weight="500" className={inter.className}>
              {day.schedule.fechado
                ? 'FECHADO'
                : `${formatHour(day.schedule.inicio)} - ${formatHour(day.schedule.termino)}`}
            </Text>
          </SchedulesDay>

          {day.name !== 'dom' && <Separator />}
        </Fragment>
      ))}
    </SchedulesDaysComponent>
  )
}
