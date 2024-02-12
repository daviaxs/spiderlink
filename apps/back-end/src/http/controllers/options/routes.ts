import { CheckUserDomainAccess } from '@/http/middlewares/check-user-domain-access'
import { FastifyInstance } from 'fastify'
import { addOption } from './addOption'
import { updateOption } from './updateOption'
import { deleteOption } from './deleteOption'
import { listOptions } from './listOptions'

export async function optionsRoutes(app: FastifyInstance) {
  app.get('/options/:domainId/:subsectionId', listOptions)

  app.patch(
    '/options/:domainId/:optionId',
    { onRequest: [CheckUserDomainAccess] },
    updateOption,
  )

  app.post(
    '/options/:domainId/:subsectionId',
    { onRequest: [CheckUserDomainAccess] },
    addOption,
  )

  app.delete(
    '/options/:domainId/:optionId',
    { onRequest: [CheckUserDomainAccess] },
    deleteOption,
  )
}
