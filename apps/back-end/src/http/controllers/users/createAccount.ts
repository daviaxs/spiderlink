import { makeCreateAccountUseCase } from '@/use-cases/factories/users/make-create-account-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { ZodError, z } from 'zod'

export async function createAccount(req: FastifyRequest, reply: FastifyReply) {
  const createAccountBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    domainId: z.string(),
  })

  const { email, password, domainId } = createAccountBodySchema.parse(req.body)

  try {
    const createAccountUseCase = makeCreateAccountUseCase()

    await createAccountUseCase.execute({ email, password, domainId })
  } catch (err) {
    if (err instanceof ZodError) {
      const message = err.issues[0].message

      reply.status(400).send({ message })
    }

    const error = err as Error
    return reply.status(400).send({ message: error.message })
  }

  reply.status(201).send({ message: 'Account created' })
}
