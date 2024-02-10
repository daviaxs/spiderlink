import { FastifyInstance } from 'fastify'
import { addSubsection } from './addSubsection'
import { CheckUserDomainAccess } from '@/http/middlewares/check-user-domain-access'
import { listSubsections } from './listSubsections'
import { updateSubsection } from './updateSubsection'
import { deleteSubsection } from './deleteSubsection'

export async function subsectionsRoutes(app: FastifyInstance) {
  app.get('/subsections/:domainId/:productId', listSubsections)

  app.patch(
    '/subsections/:domainId/:subsectionId',
    { onRequest: [CheckUserDomainAccess] },
    updateSubsection,
  )

  app.post(
    '/subsections/:domainId/:productId',
    { onRequest: [CheckUserDomainAccess] },
    addSubsection,
  )

  app.delete(
    '/subsections/:domainId/:subsectionId',
    { onRequest: [CheckUserDomainAccess] },
    deleteSubsection,
  )
}
