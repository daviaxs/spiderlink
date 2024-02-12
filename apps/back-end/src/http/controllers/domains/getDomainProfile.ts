import { makeGetDomainProfileUseCase } from '@/use-cases/factories/domains/make-get-domain-profile-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../../utils/handleError'

export async function getDomainProfile(
  req: FastifyRequest,
  reply: FastifyReply,
) {
  const getDomainProfileBodySchema = z.object({
    id: z.string(),
  })

  const parsed = getDomainProfileBodySchema.safeParse(req.params)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { id: domainId } = parsed.data

  try {
    const getDomainProfileUseCase = makeGetDomainProfileUseCase()

    const { domain } = await getDomainProfileUseCase.execute({ domainId })

    return reply.status(200).send({ domain })
  } catch (err) {
    handleError(err, reply)
  }
}
