import { FastifyReply } from 'fastify'
import { ZodError } from 'zod'

export function handleError(err: unknown, reply: FastifyReply) {
  if (err instanceof ZodError) {
    const message = err.issues[0].message
    return reply.status(400).send({ message })
  }

  const error = err as Error
  return reply.status(400).send({ message: error.message })
}
