import { makeUpdateSubsectionUseCase } from '@/use-cases/factories/subsections/make-update-subsection-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../../utils/handleError'

export async function updateSubsection(
  req: FastifyRequest,
  reply: FastifyReply,
) {
  const paramsBodySchema = z.object({
    domainId: z.string(),
    subsectionId: z.string(),
  })

  const subsectionBodySchema = z
    .object({
      name: z.string(),
      multipleChoice: z.boolean(),
      limit: z.number(),
      required: z.boolean(),
    })
    .partial()

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

  const { domainId, subsectionId } = parsed.data
  const { name, multipleChoice, limit, required } = parsedBody.data

  try {
    const updateSubsectionUseCase = makeUpdateSubsectionUseCase()

    const subsection = await updateSubsectionUseCase.execute(
      {
        name,
        multipleChoice,
        limit,
        required,
        Domain: {
          connect: {
            id: domainId,
          },
        },
      },
      subsectionId,
      domainId,
    )

    return reply.status(201).send({ message: 'Subsection updated', subsection })
  } catch (err) {
    handleError(err, reply)
  }
}
