import { makeDeleteUserUseCase } from '@/use-cases/factories/users/make-delete-user-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../handleError'

export async function deleteUser(req: FastifyRequest, reply: FastifyReply) {
  const deleteUserBodySchema = z.object({
    userId: z.string(),
  })

  const parsed = deleteUserBodySchema.safeParse(req.params)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { userId } = parsed.data

  try {
    const deleteUserUseCase = makeDeleteUserUseCase()

    await deleteUserUseCase.execute({ userId })
  } catch (err) {
    handleError(err, reply)
  }
}
