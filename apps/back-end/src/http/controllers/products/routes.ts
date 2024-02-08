import { CheckUserDomainAccess } from '@/http/middlewares/check-user-domain-access'
import { FastifyInstance } from 'fastify'
import { addProduct } from './addProduct'
import { deleteProduct } from './deleteProduct'

export async function productsRoutes(app: FastifyInstance) {
  app.post(
    '/products/:domainId',
    { onRequest: [CheckUserDomainAccess] },
    addProduct,
  )

  app.delete(
    '/products/:domainId',
    { onRequest: [CheckUserDomainAccess] },
    deleteProduct,
  )
}
