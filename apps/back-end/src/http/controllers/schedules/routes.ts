import { CheckUserDomainAccess } from '@/http/middlewares/check-user-domain-access'
import { FastifyInstance } from 'fastify'
import { addSchedule } from './addSchedule'
import { findSchedule } from './findSchedule'
import { updateSchedule } from './updateSchedule'
import { deleteSchedule } from './deleteSchedule'

export async function schedulesRoutes(app: FastifyInstance) {
  app.get('/schedules/:domainId', findSchedule)

  app.patch(
    '/schedules/:scheduleId/:domainId',
    { onRequest: [CheckUserDomainAccess] },
    updateSchedule,
  )

  app.post(
    '/schedules/:domainId',
    { onRequest: [CheckUserDomainAccess] },
    addSchedule,
  )

  app.delete(
    '/schedules/:domainId/:scheduleId',
    { onRequest: [CheckUserDomainAccess] },
    deleteSchedule,
  )
}
