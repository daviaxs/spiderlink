import { makeListCategoriesUseCase } from '@/use-cases/factories/categories/make-list-categories-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../handleError'

export async function listCategories(req: FastifyRequest, reply: FastifyReply) {
  const listCategoriesBodySchema = z.object({
    domainId: z.string(),
  })

  const parsed = listCategoriesBodySchema.safeParse(req.params)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { domainId } = parsed.data

  try {
    const listCategoriesUseCase = makeListCategoriesUseCase()

    const { categories } = await listCategoriesUseCase.execute(domainId)

    return reply.status(200).send({ categories })
  } catch (err) {
    handleError(err, reply)
  }
}
