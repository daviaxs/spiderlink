import { FastifyInstance } from 'fastify'
import { createDomain } from './createDomain'
import { deleteDomain } from './deleteDomain'
import { VerifyJWT } from '@/http/middlewares/verify-jwt'

export async function domainsRoutes(app: FastifyInstance) {
  app.post('/domains', createDomain)
  app.delete('/domains', { onRequest: [VerifyJWT] }, deleteDomain)
}
