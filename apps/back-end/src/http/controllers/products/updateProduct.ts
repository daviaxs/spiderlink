import { makeUpdateProductUseCase } from '@/use-cases/factories/products/make-update-product-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../handleError'

export async function updateProdut(req: FastifyRequest, reply: FastifyReply) {
  const paramsBodySchema = z.object({
    domainId: z.string(),
    productId: z.string(),
  })

  const updateProductBodySchema = z
    .object({
      img: z.string(),
      name: z.string(),
      price: z.number(),
      description: z.string(),
    })
    .partial()

  const parsed = updateProductBodySchema.safeParse(req.body)
  const parsedDomain = paramsBodySchema.safeParse(req.params)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  if (!parsedDomain.success) {
    const message = parsedDomain.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { img, name, price, description } = parsed.data
  const { domainId, productId } = parsedDomain.data

  try {
    const updateProductUseCase = makeUpdateProductUseCase()

    const product = await updateProductUseCase.execute(
      {
        img,
        name,
        price,
        description,
      },
      domainId,
      productId,
    )

    return reply.status(201).send({ message: 'Product updated', data: product })
  } catch (err) {
    handleError(err, reply)
  }
}
