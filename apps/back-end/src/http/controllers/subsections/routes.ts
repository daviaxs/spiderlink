import { FastifyInstance } from 'fastify'
import { addSubsection } from './addSubsection'
import { CheckUserDomainAccess } from '@/http/middlewares/check-user-domain-access'

export async function subsectionsRoutes(app: FastifyInstance) {
  app.post(
    '/subsections',
    { onRequest: [CheckUserDomainAccess] },
    addSubsection,
  )
}
