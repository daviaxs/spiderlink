import { makeAddCategoryUseCase } from '@/use-cases/factories/categories/make-add-category-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../handleError'

export async function addCategory(req: FastifyRequest, reply: FastifyReply) {
  const addCategoryBodySchema = z.object({
    name: z.string(),
    domainName: z.string(),
  })

  const parsed = addCategoryBodySchema.safeParse(req.body)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { name, domainName } = parsed.data

  try {
    const addCategoryUseCase = makeAddCategoryUseCase()

    const category = await addCategoryUseCase.execute(
      {
        name,
        Domain: {
          connect: {
            domainName,
          },
        },
      },
      domainName,
    )

    return reply
      .status(201)
      .send({ message: 'Category created', data: category })
  } catch (err) {
    handleError(err, reply)
  }
}
