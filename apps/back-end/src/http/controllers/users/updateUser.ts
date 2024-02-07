import { makeUpdateUserUseCase } from '@/use-cases/factories/users/make-update-user-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../handleError'

export async function updateUser(req: FastifyRequest, reply: FastifyReply) {
  const userIdBodySchema = z.object({
    id: z.string(),
  })

  const updateUserBodySchema = z
    .object({
      email: z.string().email(),
      role: z.enum(['OWNER', 'ADMIN']),
      password_hash: z.string().min(6),
    })
    .partial()

  const parsed = updateUserBodySchema.safeParse(req.body)
  const parsedId = userIdBodySchema.safeParse(req.params)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  if (!parsedId.success) {
    const message = parsedId.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { id } = parsedId.data

  const { email, password_hash, role } = parsed.data

  try {
    const updateUserUseCase = makeUpdateUserUseCase()

    const user = await updateUserUseCase.execute(id, {
      email,
      role,
      password_hash,
    })

    return reply.status(200).send({ message: 'User updated', data: user })
  } catch (err) {
    handleError(err, reply)
  }
}
