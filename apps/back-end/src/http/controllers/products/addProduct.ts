import { makeAddProductUseCase } from '@/use-cases/factories/products/make-add-product-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../handleError'

export async function addProduct(req: FastifyRequest, reply: FastifyReply) {
  const domainIdBodySchema = z.object({
    domainId: z.string(),
  })

  const addProductBodySchema = z.object({
    img: z.string(),
    name: z.string(),
    price: z.number(),
    description: z.string(),
    categoryName: z.string(),
  })

  const parsed = addProductBodySchema.safeParse(req.body)
  const parsedId = domainIdBodySchema.safeParse(req.params)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  if (!parsedId.success) {
    const message = parsedId.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { img, name, price, description, categoryName } = parsed.data
  const { domainId } = parsedId.data

  if (!name || !price || !description || !categoryName) {
    return reply.status(400).send({ message: 'Missing body parameter' })
  }

  try {
    const addProductUseCase = makeAddProductUseCase()

    const product = await addProductUseCase.execute(
      {
        name,
        price,
        img,
        description,
        category: {
          connect: {
            name: categoryName,
          },
        },
        Domain: {
          connect: {
            id: domainId,
          },
        },
      },
      categoryName,
      domainId,
    )

    return reply.status(201).send({ message: 'Product created', data: product })
  } catch (err) {
    handleError(err, reply)
  }
}
