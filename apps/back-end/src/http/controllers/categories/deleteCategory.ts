import { makeDeleteCategoryUseCase } from '@/use-cases/factories/categories/make-delete-category-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../../utils/handleError'

export async function deleteCategory(req: FastifyRequest, reply: FastifyReply) {
  const deleteCategoryBodySchema = z.object({
    categoryId: z.string(),
    domainId: z.string(),
  })

  const parsed = deleteCategoryBodySchema.safeParse(req.params)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { categoryId, domainId } = parsed.data

  try {
    const deleteCategoryUseCase = makeDeleteCategoryUseCase()

    await deleteCategoryUseCase.execute(categoryId, domainId)

    return reply.status(204).send()
  } catch (err) {
    handleError(err, reply)
  }
}
