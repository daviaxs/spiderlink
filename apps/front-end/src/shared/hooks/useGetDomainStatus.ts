import { useState, useEffect } from 'react'
import { format, setHours, setMinutes } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { api } from '@/lib/axios'
import { DaysWeek } from '../contexts/Schedules'

type DayOfWeekMap = {
  [key: string]: keyof DaysWeek
}

export function useGetDomainStatus(): string {
  const [status, setStatus] = useState<'aberto' | 'fechado' | 'carregando'>(
    'carregando',
  )

  useEffect(() => {
    const fetchSchedule = async (): Promise<DaysWeek> => {
      const response = await api.get(
        `/schedules/${process.env.NEXT_PUBLIC_DOMAIN_ID}`,
      )

      return response.data.schedule
    }

    const isEstablishmentOpen = (schedule: DaysWeek): boolean => {
      const now = new Date()
      const currentDay = format(now, 'eee', { locale: ptBR })
        .slice(0, 3)
        .toLowerCase()

      const dayOfWeekMap: DayOfWeekMap = {
        seg: 'seg',
        ter: 'ter',
        qua: 'qua',
        qui: 'qui',
        sex: 'sex',
        sáb: 'sab',
        dom: 'dom',
      }

      const daySchedule = schedule[dayOfWeekMap[currentDay]]

      if (daySchedule && !daySchedule.fechado) {
        const inicioMatch = daySchedule.inicio.match(/.{1,2}/g)
        const terminoMatch = daySchedule.termino.match(/.{1,2}/g)

        if (inicioMatch && terminoMatch) {
          const [inicioHour, inicioMinute] = inicioMatch.map(Number)
          const [terminoHour, terminoMinute] = terminoMatch.map(Number)

          const inicioDate = setHours(setMinutes(now, inicioMinute), inicioHour)
          const terminoDate = setHours(
            setMinutes(now, terminoMinute),
            terminoHour,
          )

          if (now >= inicioDate && now <= terminoDate) {
            return true
          }
        }
      }

      return false
    }

    const checkEstablishmentStatus = async () => {
      const schedule = await fetchSchedule()
      const isOpen = isEstablishmentOpen(schedule)
      setStatus(isOpen ? 'aberto' : 'fechado')
    }

    checkEstablishmentStatus()
  }, [])

  return status
}
