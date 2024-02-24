import fastifyCookie from '@fastify/cookie'
import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import rateLimit from '@fastify/rate-limit'
import fastify from 'fastify'
import { v2 as cloudinary } from 'cloudinary'
import { env } from './env'
import { userRoutes } from './http/controllers/users/routes'
import { domainsRoutes } from './http/controllers/domains/routes'
import { categoriesRoutes } from './http/controllers/categories/routes'
import { productsRoutes } from './http/controllers/products/routes'
import { subsectionsRoutes } from './http/controllers/subsections/routes'
import { uploadsRoutes } from './http/controllers/uploads/routes'
import { optionsRoutes } from './http/controllers/options/routes'
import { schedulesRoutes } from './http/controllers/schedules/routes'
import { domains } from './domains'

export const app = fastify()

app.register(fastifyCors, {
  origin: domains,
  credentials: true,
})

app.register(multipart, {
  sharedSchemaId: 'MultipartfileType',
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
})

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_SECRET_KEY,
})

app.register(rateLimit, {
  max: 60,
  timeWindow: '1 minute',
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
app.register(productsRoutes)
app.register(subsectionsRoutes)
app.register(optionsRoutes)
app.register(schedulesRoutes)
app.register(uploadsRoutes)
