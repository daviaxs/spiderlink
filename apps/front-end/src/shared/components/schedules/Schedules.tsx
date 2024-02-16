import { inter } from '@/shared/style/theme/fonts'
import { Text } from '../text/Text'
import {
  SchedulesDay,
  SchedulesDays,
  SchedulesHeader,
  SchedulesRoot,
  Separator,
} from './Schedules.style'
import { formatHour } from '@/shared/functions/formatHour'
import { useContext } from 'react'
import { SchedulesContext } from '@/shared/contexts/Schedules'

export function Schedules() {
  const { seg, ter, qua, qui, sex, sab, dom } = useContext(SchedulesContext)

  return (
    <SchedulesRoot>
      <SchedulesHeader>
        <Text as="h2" size={20} className={inter.className}>
          Horários
        </Text>
      </SchedulesHeader>

      <SchedulesDays>
        <SchedulesDay>
          <Text
            as="h3"
            size={16}
            className={inter.className}
            fontVariant="small-caps"
          >
            SEG
          </Text>

          <Text as="h3" size={16} $weight="500" className={inter.className}>
            {seg.fechado
              ? 'FECHADO'
              : `${formatHour(seg.inicio)} - ${formatHour(seg.termino)}`}
          </Text>
        </SchedulesDay>

        <Separator />

        <SchedulesDay>
          <Text
            as="h3"
            size={16}
            className={inter.className}
            fontVariant="small-caps"
          >
            TER
          </Text>

          <Text as="h3" size={16} $weight="500" className={inter.className}>
            {ter.fechado
              ? 'FECHADO'
              : `${formatHour(ter.inicio)} - ${formatHour(ter.termino)}`}
          </Text>
        </SchedulesDay>

        <Separator />

        <SchedulesDay>
          <Text
            as="h3"
            size={16}
            className={inter.className}
            fontVariant="small-caps"
          >
            QUA
          </Text>

          <Text as="h3" size={16} $weight="500" className={inter.className}>
            {qua.fechado
              ? 'FECHADO'
              : `${formatHour(qua.inicio)} - ${formatHour(qua.termino)}`}
          </Text>
        </SchedulesDay>

        <Separator />

        <SchedulesDay>
          <Text
            as="h3"
            size={16}
            className={inter.className}
            fontVariant="small-caps"
          >
            QUI
          </Text>

          <Text as="h3" size={16} $weight="500" className={inter.className}>
            {qui.fechado
              ? 'FECHADO'
              : `${formatHour(qui.inicio)} - ${formatHour(qui.termino)}`}
          </Text>
        </SchedulesDay>

        <Separator />

        <SchedulesDay>
          <Text
            as="h3"
            size={16}
            className={inter.className}
            fontVariant="small-caps"
          >
            SEX
          </Text>

          <Text as="h3" size={16} $weight="500" className={inter.className}>
            {sex.fechado
              ? 'FECHADO'
              : `${formatHour(sex.inicio)} - ${formatHour(sex.termino)}`}
          </Text>
        </SchedulesDay>

        <Separator />

        <SchedulesDay>
          <Text
            as="h3"
            size={16}
            className={inter.className}
            fontVariant="small-caps"
          >
            SAB
          </Text>

          <Text as="h3" size={16} $weight="500" className={inter.className}>
            {sab.fechado
              ? 'FECHADO'
              : `${formatHour(sab.inicio)} - ${formatHour(sab.termino)}`}
          </Text>
        </SchedulesDay>

        <Separator />

        <SchedulesDay>
          <Text
            as="h3"
            size={16}
            className={inter.className}
            fontVariant="small-caps"
          >
            DOM
          </Text>

          <Text as="h3" size={16} $weight="500" className={inter.className}>
            {dom.fechado
              ? 'FECHADO'
              : `${formatHour(dom.inicio)} - ${formatHour(dom.termino)}`}
          </Text>
        </SchedulesDay>
      </SchedulesDays>
    </SchedulesRoot>
  )
}
