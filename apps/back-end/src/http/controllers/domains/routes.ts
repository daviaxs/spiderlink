import { FastifyInstance } from 'fastify'
import { createDomain } from './createDomain'
import { deleteDomain } from './deleteDomain'
import { VerifyJWT } from '@/http/middlewares/verify-jwt'
import { getDomainProfile } from './getDomainProfile'
import { updateDomain } from './updateDomain'

export async function domainsRoutes(app: FastifyInstance) {
  app.post('/domains', createDomain)
  app.get('/domains/:id', getDomainProfile)
  app.patch('/domains/:id', { onRequest: [VerifyJWT] }, updateDomain)
  app.delete('/domains', { onRequest: [VerifyJWT] }, deleteDomain)
}
