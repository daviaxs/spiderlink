import { env } from '@/env'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function refresh(req: FastifyRequest, reply: FastifyReply) {
  await req.jwtVerify({ onlyCookie: false })

  const { role, domainId } = req.user

  const token = await reply.jwtSign(
    {
      role,
      domainId,
    },
    {
      sign: {
        sub: req.user.sub,
      },
    },
  )

  const refreshToken = await reply.jwtSign(
    {
      role,
    },
    {
      sign: {
        sub: req.user.sub,
        expiresIn: '30d',
      },
    },
  )

  return reply
    .setCookie('spiderlink_refresh_token', refreshToken, {
      path: '/',
      sameSite: true,
      httpOnly: env.NODE_ENV === 'prod',
      secure: env.NODE_ENV === 'prod',
    })
    .status(200)
    .send({
      token,
    })
}
