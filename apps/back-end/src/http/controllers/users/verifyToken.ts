import { env } from '@/env'
import { FastifyReply, FastifyRequest } from 'fastify'
import jwt from 'jsonwebtoken'

export async function verifyToken(req: FastifyRequest, reply: FastifyReply) {
  const token = req.headers.authorization?.replace('Bearer ', '')
  const jwtSecret = env.JWT_SECRET

  if (!token) {
    return reply.status(401).send({ message: 'Não autenticado' })
  }

  try {
    const userInfo = jwt.verify(token, jwtSecret)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    req.user = userInfo as any

    return reply.status(200).send({ message: 'Token válido' })
  } catch (e) {
    console.error(e)
    return reply.status(401).send({ message: 'Token inválido' })
  }
}
