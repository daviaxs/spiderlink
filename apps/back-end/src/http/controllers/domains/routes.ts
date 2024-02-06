import { FastifyInstance } from 'fastify'
import { createDomain } from './createDomain'
import { deleteDomain } from './deleteDomain'
import { getDomainProfile } from './getDomainProfile'
import { updateDomain } from './updateDomain'
import { VerifyJWTRule } from '@/http/middlewares/verify-jwt-rule'
import { CheckUserDomainAccess } from '@/http/middlewares/check-user-domain-access'

export async function domainsRoutes(app: FastifyInstance) {
  app.post('/domains', createDomain)
  app.get('/domains/:id', getDomainProfile)
  app.patch(
    '/domains/:id',
    { onRequest: [CheckUserDomainAccess] },
    updateDomain,
  )
  app.delete('/domains', { onRequest: [VerifyJWTRule('OWNER')] }, deleteDomain)
}
