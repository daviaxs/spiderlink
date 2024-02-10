import { makeListSubsectionsUseCase } from '@/use-cases/factories/subsections/make-list-subsections-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../handleError'

export async function listSubsections(
  req: FastifyRequest,
  reply: FastifyReply,
) {
  const paramsBodySchema = z.object({
    domainId: z.string(),
    productId: z.string(),
  })

  const parsed = paramsBodySchema.safeParse(req.params)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { domainId, productId } = parsed.data

  try {
    const listSubsectionsUseCase = makeListSubsectionsUseCase()

    const subsections = await listSubsectionsUseCase.execute(
      productId,
      domainId,
    )

    return reply.status(200).send(subsections)
  } catch (err) {
    handleError(err, reply)
  }
}
