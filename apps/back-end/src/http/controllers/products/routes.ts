import { CheckUserDomainAccess } from '@/http/middlewares/check-user-domain-access'
import { FastifyInstance } from 'fastify'
import { addProduct } from './addProduct'

export async function productsRoutes(app: FastifyInstance) {
  app.post(
    '/products/:domainId',
    { onRequest: [CheckUserDomainAccess] },
    addProduct,
  )
}
