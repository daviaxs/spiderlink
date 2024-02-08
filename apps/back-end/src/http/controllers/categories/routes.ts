import { CheckUserDomainAccess } from '@/http/middlewares/check-user-domain-access'
import { FastifyInstance } from 'fastify'
import { addCategory } from './addCategory'
import { deleteCategory } from './deleteCategory'
import { listCategories } from './listCategories'

export async function categoriesRoutes(app: FastifyInstance) {
  app.get('/categories/:domainId', listCategories)

  app.post(
    '/categories/:domainId',
    { onRequest: [CheckUserDomainAccess] },
    addCategory,
  )

  app.delete(
    '/categories/:domainId/:categoryId',
    { onRequest: [CheckUserDomainAccess] },
    deleteCategory,
  )
}
