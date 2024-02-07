import { makeDeleteCategoryUseCase } from '@/use-cases/factories/categories/make-delete-category-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { ZodError, z } from 'zod'

export async function deleteCategory(req: FastifyRequest, reply: FastifyReply) {
  const deleteCategoryBodySchema = z.object({
    id: z.string(),
  })

  const parsed = deleteCategoryBodySchema.safeParse(req.params)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { id } = parsed.data

  try {
    const deleteCategoryUseCase = makeDeleteCategoryUseCase()

    await deleteCategoryUseCase.execute(id)

    return reply.status(204).send()
  } catch (err) {
    if (err instanceof ZodError) {
      const message = err.issues[0].message

      reply.status(400).send({ message })
    }

    const error = err as Error
    return reply.status(400).send({ message: error.message })
  }
}
