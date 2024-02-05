import { makeCreateAccountUseCase } from '@/use-cases/factories/users/make-create-account-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { ZodError, z } from 'zod'

export async function createAccount(req: FastifyRequest, reply: FastifyReply) {
  const createAccountBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    domainId: z.string(),
  })

  let email, password, domainId

  try {
    // eslint-disable-next-line prettier/prettier
    ({ email, password, domainId } = createAccountBodySchema.parse(req.body))
  } catch (err) {
    if (err instanceof ZodError) {
      const message = err.issues[0].message
      return reply.status(400).send({ message })
    }

    const error = err as Error
    return reply.status(400).send({ message: error.message })
  }

  if (!email || !password || !domainId) {
    return reply.status(400).send({ message: 'Invalid request body' })
  }

  try {
    const createAccountUseCase = makeCreateAccountUseCase()

    await createAccountUseCase.execute({ email, password, domainId })
  } catch (err) {
    const error = err as Error
    return reply.status(400).send({ message: error.message })
  }

  reply.status(201).send({ message: 'Account created' })
}
