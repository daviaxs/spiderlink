import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../../utils/handleError'
import { makeAddProductUseCase } from '@/use-cases/factories/products/make-add-product-use-case'

export async function addProduct(req: FastifyRequest, reply: FastifyReply) {
  const paramsBodySchema = z.object({
    domainId: z.string(),
    categoryId: z.string(),
  })

  const addProductBodySchema = z.object({
    img: z.string(),
    name: z.string(),
    price: z.number(),
    description: z.string(),
  })

  const parsed = addProductBodySchema.safeParse(req.body)
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
  const { domainId, categoryId } = parsedDomain.data

  try {
    const addProductUseCase = makeAddProductUseCase()

    const product = await addProductUseCase.execute(
      {
        img,
        name,
        price,
        description,
        Category: {
          connect: {
            id: categoryId,
          },
        },
        Domain: {
          connect: {
            id: domainId,
          },
        },
      },
      categoryId,
      domainId,
    )

    return reply
      .status(201)
      .send({ message: 'Category created', data: product })
  } catch (err) {
    handleError(err, reply)
  }
}
