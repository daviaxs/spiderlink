import { api } from '@/lib/axios'
import { ReactNode, createContext, useEffect, useState } from 'react'

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

export const SchedulesContext = createContext({} as DaysWeek)

export function SchedulesProvider({ children }: { children: ReactNode }) {
  const [schedules, setSchedules] = useState({
    seg: {
      inicio: '0000',
      termino: '0000',
      fechado: false,
    },
    ter: {
      inicio: '0000',
      termino: '0000',
      fechado: false,
    },
    qua: {
      inicio: '0000',
      termino: '0000',
      fechado: false,
    },
    qui: {
      inicio: '0000',
      termino: '0000',
      fechado: false,
    },
    sex: {
      inicio: '0000',
      termino: '0000',
      fechado: false,
    },
    sab: {
      inicio: '0000',
      termino: '0000',
      fechado: false,
    },
    dom: {
      inicio: '0000',
      termino: '0000',
      fechado: false,
    },
  })

  useEffect(() => {
    api
      .get(`/schedules/${process.env.NEXT_PUBLIC_DOMAIN_ID}`)
      .then((response) => {
        const data = response.data.schedule

        setSchedules({
          seg: {
            inicio: data.seg.inicio,
            termino: data.seg.termino,
            fechado: data.seg.fechado,
          },
          ter: {
            inicio: data.ter.inicio,
            termino: data.ter.termino,
            fechado: data.ter.fechado,
          },
          qua: {
            inicio: data.qua.inicio,
            termino: data.qua.termino,
            fechado: data.qua.fechado,
          },
          qui: {
            inicio: data.qui.inicio,
            termino: data.qui.termino,
            fechado: data.qui.fechado,
          },
          sex: {
            inicio: data.sex.inicio,
            termino: data.sex.termino,
            fechado: data.sex.fechado,
          },
          sab: {
            inicio: data.sab.inicio,
            termino: data.sab.termino,
            fechado: data.sab.fechado,
          },
          dom: {
            inicio: data.dom.inicio,
            termino: data.dom.termino,
            fechado: data.dom.fechado,
          },
        })
      })
  }, [])

  return (
    <SchedulesContext.Provider value={schedules}>
      {children}
    </SchedulesContext.Provider>
  )
}
