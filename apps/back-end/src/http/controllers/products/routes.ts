import { CheckUserDomainAccess } from '@/http/middlewares/check-user-domain-access'
import { FastifyInstance } from 'fastify'
import { addProduct } from './addProduct'
import { deleteProduct } from './deleteProduct'
import { listProducts } from './listProducts'
import { updateProdut } from './updateProduct'

export async function productsRoutes(app: FastifyInstance) {
  app.get('/products/:domainId/:categoryId', listProducts)

  app.post(
    '/products/:domainId/:categoryId',
    { onRequest: [CheckUserDomainAccess] },
    addProduct,
  )

  app.patch(
    '/products/:domainId/:productId',
    { onRequest: [CheckUserDomainAccess] },
    updateProdut,
  )

  app.delete(
    '/products/:domainId',
    { onRequest: [CheckUserDomainAccess] },
    deleteProduct,
  )
}
