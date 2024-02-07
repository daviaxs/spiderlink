import { CheckUserDomainAccess } from '@/http/middlewares/check-user-domain-access'
import { FastifyInstance } from 'fastify'
import { addCategory } from './addCategory'
import { deleteCategory } from './deleteCategory'
import { listCategories } from './listCategories'

export async function categoriesRoutes(app: FastifyInstance) {
  app.get('/categories', listCategories)

  app.post('/categories', { onRequest: [CheckUserDomainAccess] }, addCategory)

  app.delete(
    '/categories/:id',
    { onRequest: [CheckUserDomainAccess] },
    deleteCategory,
  )
}
