import { makeListDomainsUseCase } from '@/use-cases/factories/domains/make-list-domains-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function listDomains(req: FastifyRequest, reply: FastifyReply) {
  const listDomainsUseCase = makeListDomainsUseCase()

  const { domains } = await listDomainsUseCase.execute()

  return reply.status(200).send({ domains })
}
