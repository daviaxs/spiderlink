import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../../utils/handleError'
import { makeAddOptionUseCase } from '@/use-cases/factories/options/make-add-option-use-case'

export async function addOption(req: FastifyRequest, reply: FastifyReply) {
  const paramsBodySchema = z.object({
    domainId: z.string(),
    subsectionId: z.string(),
  })

  const optionBodySchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
  })

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

  const { domainId, subsectionId } = parsed.data
  const { name, description, price } = parsedBody.data

  try {
    const addOptionUseCase = makeAddOptionUseCase()

    const option = await addOptionUseCase.execute(
      {
        name,
        description,
        price,
        Subsection: {
          connect: {
            id: subsectionId,
          },
        },
        Domain: {
          connect: {
            id: domainId,
          },
        },
      },
      subsectionId,
      domainId,
    )

    return reply.status(201).send({ message: 'Option added', option })
  } catch (err) {
    handleError(err, reply)
  }
}
