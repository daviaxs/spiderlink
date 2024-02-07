import { makeListCategoriesUseCase } from '@/use-cases/factories/categories/make-list-categories-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { ZodError, z } from 'zod'

export async function listCategories(req: FastifyRequest, reply: FastifyReply) {
  const listCategoriesBodySchema = z.object({
    domainName: z.string(),
  })

  const parsed = listCategoriesBodySchema.safeParse(req.body)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { domainName } = parsed.data

  try {
    const listCategoriesUseCase = makeListCategoriesUseCase()

    const { categories } = await listCategoriesUseCase.execute(domainName)

    return reply.status(200).send({ categories })
  } catch (err) {
    if (err instanceof ZodError) {
      const message = err.issues[0].message

      reply.status(400).send({ message })
    }

    const error = err as Error
    return reply.status(400).send({ message: error.message })
  }
}
