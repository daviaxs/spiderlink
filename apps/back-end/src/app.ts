import fastifyCookie from '@fastify/cookie'
import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastify from 'fastify'
import { env } from './env'

export const app = fastify()

app.register(fastifyCors, {
  origin: env.FRONT_END_URL,
  credentials: true,
})

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: { expiresIn: '1h' },
})

app.register(fastifyCookie)
