import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../handleError'
import { makeDeleteProductUseCase } from '@/use-cases/factories/products/make-delete-product-use-case'

export async function deleteProduct(req: FastifyRequest, reply: FastifyReply) {
  const domainIdBodySchema = z.object({
    domainId: z.string(),
  })

  const productIdBodySchema = z.object({
    productId: z.string(),
  })

  const parsedId = domainIdBodySchema.safeParse(req.params)
  const parsed = productIdBodySchema.safeParse(req.body)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  if (!parsedId.success) {
    const message = parsedId.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { productId } = parsed.data
  const { domainId } = parsedId.data

  try {
    const deleteProductUseCase = makeDeleteProductUseCase()

    await deleteProductUseCase.execute(productId, domainId)

    return reply.status(200).send({ message: 'Product deleted' })
  } catch (err) {
    handleError(err, reply)
  }
}
