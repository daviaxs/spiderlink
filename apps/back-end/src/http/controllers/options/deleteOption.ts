import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../handleError'
import { makeDeleteOptionUseCase } from '@/use-cases/factories/options/make-delete-option-use-case'

export async function deleteOption(req: FastifyRequest, reply: FastifyReply) {
  const paramsBodySchema = z.object({
    domainId: z.string(),
    optionId: z.string(),
  })

  const parsed = paramsBodySchema.safeParse(req.params)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { domainId, optionId } = parsed.data

  try {
    const deleteOptionUseCase = makeDeleteOptionUseCase()

    await deleteOptionUseCase.execute(optionId, domainId)

    return reply.status(200).send({ message: 'Option deleted' })
  } catch (err) {
    handleError(err, reply)
  }
}
