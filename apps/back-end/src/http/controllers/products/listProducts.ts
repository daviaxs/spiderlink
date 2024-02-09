import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../handleError'
import { makeListProductsUseCase } from '@/use-cases/factories/products/make-list-products-use-case'

export async function listProducts(req: FastifyRequest, reply: FastifyReply) {
  const listProductsBodySchema = z.object({
    domainId: z.string(),
    categoryId: z.string(),
  })

  const parsed = listProductsBodySchema.safeParse(req.params)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { domainId, categoryId } = parsed.data

  if (!categoryId) {
    return reply.status(400).send({ message: 'Missing body parameter' })
  }

  try {
    const listProductsUseCase = makeListProductsUseCase()

    const products = await listProductsUseCase.execute(categoryId, domainId)

    reply.status(200).send(products)
  } catch (error) {
    handleError(error, reply)
  }
}
