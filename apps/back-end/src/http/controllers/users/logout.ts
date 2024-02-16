import { env } from '@/env'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function logout(req: FastifyRequest, reply: FastifyReply) {
  return reply
    .setCookie('spiderlink_refresh_token', '', {
      path: '/',
      sameSite: true,
      httpOnly: env.NODE_ENV === 'prod',
      secure: env.NODE_ENV === 'prod',
      expires: new Date(0),
    })
    .status(200)
    .send('Logout successfully')
}
