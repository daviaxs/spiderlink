import { env } from '@/env'
import { makeAuthenticateUseCase } from '@/use-cases/factories/users/make-authenticate-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function authenticate(req: FastifyRequest, reply: FastifyReply) {
  const authenticateBodySchema = z.object({
    email: z.string(),
    password: z.string(),
    domainName: z.string(),
  })

  const parsed = authenticateBodySchema.safeParse(req.body)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { email, password, domainName } = parsed.data

  try {
    const authenticateUseCase = makeAuthenticateUseCase()

    const { user } = await authenticateUseCase.execute({
      email,
      password,
      domainName,
    })

    const token = await reply.jwtSign(
      {
        role: user.role,
      },
      {
        sign: {
          sub: user.id,
        },
      },
    )

    const refreshToken = await reply.jwtSign(
      {
        role: user.role,
      },
      {
        sign: {
          sub: user.id,
          expiresIn: '30d',
        },
      },
    )

    return reply
      .setCookie('spiderlink_refresh_token', refreshToken, {
        path: '/',
        httpOnly: env.NODE_ENV === 'prod',
        secure: env.NODE_ENV === 'prod',
      })
      .status(200)
      .send({ message: 'Authenticated', data: { token } })
  } catch (err) {
    const error = err as Error
    return reply.status(400).send({ message: error.message })
  }
}
