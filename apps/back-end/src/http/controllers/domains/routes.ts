import { FastifyInstance } from 'fastify'
import { createDomain } from './createDomain'
import { deleteDomain } from './deleteDomain'
import { getDomainProfile } from './getDomainProfile'
import { updateDomain } from './updateDomain'
import { VerifyJWTRule } from '@/http/middlewares/verify-jwt-rule'
import { CheckUserDomainAccess } from '@/http/middlewares/check-user-domain-access'
import { listDomains } from './listDomains'

export async function domainsRoutes(app: FastifyInstance) {
  app.get('/domains/:id', getDomainProfile)
  app.get('/domains', { onRequest: [VerifyJWTRule('OWNER')] }, listDomains)

  app.post('/domains', createDomain)

  app.patch(
    '/domains/:domainId',
    { onRequest: [CheckUserDomainAccess] },
    updateDomain,
  )
  app.delete('/domains', { onRequest: [VerifyJWTRule('OWNER')] }, deleteDomain)
}
