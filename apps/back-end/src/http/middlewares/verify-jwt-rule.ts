import { FastifyReply, FastifyRequest } from 'fastify'

interface VerifyJWTRuleParam {
  role: 'OWNER' | 'ADMIN'
}

export function VerifyJWTRule(role: 'OWNER' | 'ADMIN') {
  return async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const user = (await req.jwtVerify()) as VerifyJWTRuleParam

      if (user.role !== role) {
        return reply.status(403).send({ message: 'Access denied' })
      }
    } catch (err) {
      return reply.status(401).send({ message: 'Unauthorized' })
    }
  }
}
