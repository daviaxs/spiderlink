import { CheckUserDomainAccess } from '@/http/middlewares/check-user-domain-access'
import { FastifyInstance } from 'fastify'
import { addProduct } from './addProduct'
import { deleteProduct } from './deleteProduct'
import { listProducts } from './listProducts'

export async function productsRoutes(app: FastifyInstance) {
  app.get('/products/:domainId/:categoryId', listProducts)

  app.post(
    '/products/:domainId/:categoryId',
    { onRequest: [CheckUserDomainAccess] },
    addProduct,
  )

  app.delete(
    '/products/:domainId',
    { onRequest: [CheckUserDomainAccess] },
    deleteProduct,
  )
}
