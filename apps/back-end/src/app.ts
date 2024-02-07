import fastifyCookie from '@fastify/cookie'
import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastify from 'fastify'
import { env } from './env'
import { userRoutes } from './http/controllers/users/routes'
import { domainsRoutes } from './http/controllers/domains/routes'
import { categoriesRoutes } from './http/controllers/categories/routes'

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

app.register(userRoutes)
app.register(domainsRoutes)
app.register(categoriesRoutes)
