import { makeDeleteDomainUseCase } from '@/use-cases/factories/domains/make-delete-domain-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../../utils/handleError'

export async function deleteDomain(req: FastifyRequest, reply: FastifyReply) {
  const deleteDomainBodySchema = z.object({
    domainName: z.string(),
  })

  const parsed = deleteDomainBodySchema.safeParse(req.body)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { domainName } = parsed.data

  try {
    const deleteDomainUseCase = makeDeleteDomainUseCase()

    await deleteDomainUseCase.execute(domainName)
  } catch (err) {
    handleError(err, reply)
  }
}
