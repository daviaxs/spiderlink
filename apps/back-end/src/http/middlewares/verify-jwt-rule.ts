import { User } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'

export function VerifyJWTRule(role: 'OWNER' | 'ADMIN') {
  return async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const user: User = await req.jwtVerify()

      if (user.role !== role) {
        return reply.status(403).send({ message: 'Access denied' })
      }
    } catch (err) {
      return reply.status(401).send({ message: 'Unauthorized' })
    }
  }
}
