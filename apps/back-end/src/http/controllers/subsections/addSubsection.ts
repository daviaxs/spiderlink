import { makeAddSubsectionUseCase } from '@/use-cases/factories/subsections/make-add-subsection-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../handleError'

export async function addSubsection(req: FastifyRequest, reply: FastifyReply) {
  const paramsBodySchema = z.object({
    domainId: z.string(),
    productId: z.string(),
  })

  const subsectionBodySchema = z.object({
    name: z.string(),
    multipleChoice: z.boolean(),
    limit: z.number(),
    required: z.boolean(),
  })

  const parsed = paramsBodySchema.safeParse(req.params)
  const parsedBody = subsectionBodySchema.safeParse(req.body)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  if (!parsedBody.success) {
    const message = parsedBody.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { domainId, productId } = parsed.data
  const { name, multipleChoice, limit, required } = parsedBody.data

  try {
    const addSubsectionUseCase = makeAddSubsectionUseCase()

    const subsection = await addSubsectionUseCase.execute(
      {
        name,
        multipleChoice,
        limit,
        required,
        Product: {
          connect: {
            id: productId,
          },
        },
        Domain: {
          connect: {
            id: domainId,
          },
        },
      },
      productId,
      domainId,
    )

    return reply.status(201).send({ message: 'Subsection added', subsection })
  } catch (err) {
    handleError(err, reply)
  }
}
