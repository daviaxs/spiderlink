import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../../utils/handleError'
import { makeUpdateOptionUseCase } from '@/use-cases/factories/options/make-update-option-use-case'

export async function updateOption(req: FastifyRequest, reply: FastifyReply) {
  const paramsBodySchema = z.object({
    domainId: z.string(),
    optionId: z.string(),
  })

  const optionBodySchema = z
    .object({
      name: z.string(),
      description: z.string(),
      price: z.number(),
    })
    .partial()

  const parsed = paramsBodySchema.safeParse(req.params)
  const parsedBody = optionBodySchema.safeParse(req.body)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  if (!parsedBody.success) {
    const message = parsedBody.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { domainId, optionId } = parsed.data
  const { name, description, price } = parsedBody.data

  try {
    const updateOptionnUseCase = makeUpdateOptionUseCase()

    const option = await updateOptionnUseCase.execute(
      {
        name,
        description,
        price,
        Domain: {
          connect: {
            id: domainId,
          },
        },
      },
      optionId,
      domainId,
    )

    return reply.status(201).send({ message: 'Option updated', option })
  } catch (err) {
    handleError(err, reply)
  }
}
