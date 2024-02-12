import { makeAddCategoryUseCase } from '@/use-cases/factories/categories/make-add-category-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../../utils/handleError'

export async function addCategory(req: FastifyRequest, reply: FastifyReply) {
  const domainBodySchema = z.object({
    domainId: z.string(),
  })

  const addCategoryBodySchema = z.object({
    name: z.string(),
  })

  const parsed = addCategoryBodySchema.safeParse(req.body)
  const parsedDomain = domainBodySchema.safeParse(req.params)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  if (!parsedDomain.success) {
    const message = parsedDomain.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { name } = parsed.data
  const { domainId } = parsedDomain.data

  try {
    const addCategoryUseCase = makeAddCategoryUseCase()

    const category = await addCategoryUseCase.execute(
      {
        name,
        Domain: {
          connect: {
            id: domainId,
          },
        },
      },
      domainId,
    )

    return reply
      .status(201)
      .send({ message: 'Category created', data: category })
  } catch (err) {
    handleError(err, reply)
  }
}
