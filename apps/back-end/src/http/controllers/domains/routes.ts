import { FastifyInstance } from 'fastify'
import { createDomain } from './createDomain'

export async function domainsRoutes(app: FastifyInstance) {
  app.post('/domains', createDomain)
}
