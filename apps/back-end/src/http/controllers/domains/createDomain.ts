import { makeCreateDomainUseCase } from '@/use-cases/factories/domains/make-create-domain-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { ZodError, z } from 'zod'

export async function createDomain(req: FastifyRequest, reply: FastifyReply) {
  const createDomainBodySchema = z.object({
    address: z.string(),
    cep: z.string().min(8).max(8),
    deliveryTime: z.string(),
    domainName: z.string(),
    name: z.string(),
    phone: z.string().min(8).max(12),
    cnpj: z.string().min(14).max(14),
  })

  const { address, cep, cnpj, deliveryTime, domainName, name, phone } =
    createDomainBodySchema.parse(req.body)

  try {
    const createDomainUseCase = makeCreateDomainUseCase()

    await createDomainUseCase.execute({
      address,
      cep,
      cnpj,
      deliveryTime,
      domainName,
      name,
      phone,
    })
  } catch (err) {
    if (err instanceof ZodError) {
      const message = err.issues[0].message

      reply.status(400).send({ message })
    }

    const error = err as Error
    return reply.status(400).send({ message: error.message })
  }
}
