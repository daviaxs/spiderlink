import { makeCreateDomainUseCase } from '@/use-cases/factories/domains/make-create-domain-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../../utils/handleError'

export async function createDomain(req: FastifyRequest, reply: FastifyReply) {
  const createDomainBodySchema = z.object({
    address: z.string().min(5, 'Endereço muito curto'),
    cep: z.string().min(8).max(8),
    deliveryTime: z.string(),
    domainName: z.string(),
    name: z.string().min(2, 'Nome muito curto'),
    phone: z
      .string()
      .min(8, 'Número de telefone muito curto')
      .max(12, 'Número de telefone muito longo'),
    cnpj: z.string().min(14).max(14),
  })

  const parsed = createDomainBodySchema.safeParse(req.body)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { address, cep, cnpj, deliveryTime, domainName, name, phone } =
    parsed.data

  // eslint-disable-next-line prettier/prettier
  if (!address || !cep || !cnpj || !deliveryTime || !domainName || !name || !phone) {
    return reply.status(400).send({ message: 'Missing body parameter' })
  }

  try {
    const createDomainUseCase = makeCreateDomainUseCase()

    const domain = await createDomainUseCase.execute({
      address,
      cep,
      cnpj,
      deliveryTime,
      domainName,
      name,
      phone,
    })

    return reply.status(201).send({ message: 'Domain created', data: domain })
  } catch (err) {
    handleError(err, reply)
  }
}
