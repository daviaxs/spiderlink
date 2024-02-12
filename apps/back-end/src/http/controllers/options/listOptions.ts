import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../../utils/handleError'
import { makeListOptionsUseCase } from '@/use-cases/factories/options/make-list-options-use-case'

export async function listOptions(req: FastifyRequest, reply: FastifyReply) {
  const paramsBodySchema = z.object({
    domainId: z.string(),
    subsectionId: z.string(),
  })

  const parsed = paramsBodySchema.safeParse(req.params)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { domainId, subsectionId } = parsed.data

  try {
    const listOptionsUseCase = makeListOptionsUseCase()

    const options = await listOptionsUseCase.execute(subsectionId, domainId)

    return reply.status(200).send(options)
  } catch (err) {
    handleError(err, reply)
  }
}
