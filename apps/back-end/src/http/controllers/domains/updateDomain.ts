import { makeUpdateDomainUseCase } from '@/use-cases/factories/domains/make-update-domain-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { ZodError, z } from 'zod'

export async function updateDomain(req: FastifyRequest, reply: FastifyReply) {
  const domainIdBodySchema = z.object({
    id: z.string(),
  })

  const updateDomainBodySchema = z
    .object({
      domainName: z.string(),
      name: z.string(),
      address: z.string(),
      cep: z.string().min(8).max(8),
      deliveryTime: z.string(),
      phone: z.string().min(8).max(12),
      cnpj: z.string().min(14).max(14),
    })
    .partial()

  const parsed = updateDomainBodySchema.safeParse(req.body)
  const parsedId = domainIdBodySchema.safeParse(req.params)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  if (!parsedId.success) {
    const message = parsedId.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { id } = parsedId.data

  const { domainName, name, address, cep, deliveryTime, phone, cnpj } =
    parsed.data

  try {
    const updateDomainUseCase = makeUpdateDomainUseCase()

    const domain = await updateDomainUseCase.execute(id, {
      domainName,
      name,
      address,
      cep,
      deliveryTime,
      phone,
      cnpj,
    })

    return reply.status(200).send({ message: 'Domain updated', data: domain })
  } catch (err) {
    if (err instanceof ZodError) {
      const message = err.issues[0].message

      reply.status(400).send({ message })
    }

    const error = err as Error
    return reply.status(400).send({ message: error.message })
  }
}
