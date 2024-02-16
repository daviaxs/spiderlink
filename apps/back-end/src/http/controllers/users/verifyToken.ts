import { env } from '@/env'
import { FastifyReply, FastifyRequest } from 'fastify'
import jwt from 'jsonwebtoken'
import { z } from 'zod'

export async function verifyToken(req: FastifyRequest, reply: FastifyReply) {
  const dataBodySchema = z.object({
    id: z.string(),
  })

  const parsedId = dataBodySchema.safeParse(req.params)

  if (!parsedId.success) {
    const message = parsedId.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { id: domainId } = parsedId.data

  const token = req.headers.authorization?.replace('Bearer ', '')
  const jwtSecret = env.JWT_SECRET

  if (!token) {
    return reply.status(401).send({ message: 'Não autenticado' })
  }

  try {
    const userInfo = jwt.verify(token, jwtSecret)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    req.user = userInfo as any

    if (req.user.domainId !== domainId) {
      return reply.status(403).send({ message: 'Acesso negado' })
    }

    return reply.status(200).send({ message: 'Token válido' })
  } catch (e) {
    console.error(e)
    return reply.status(401).send({ message: 'Token inválido' })
  }
}
