import fastifyCookie from '@fastify/cookie'
import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import fastify from 'fastify'
import { v2 as cloudinary } from 'cloudinary'
import { env } from './env'
import { userRoutes } from './http/controllers/users/routes'
import { domainsRoutes } from './http/controllers/domains/routes'
import { categoriesRoutes } from './http/controllers/categories/routes'
import { productsRoutes } from './http/controllers/products/routes'
import { subsectionsRoutes } from './http/controllers/subsections/routes'
import { uploadsRoutes } from './http/controllers/uploads/routes'

export const app = fastify()

app.register(fastifyCors, {
  origin: env.FRONT_END_URL,
  credentials: true,
})

app.register(multipart, {
  sharedSchemaId: 'MultipartfileType',
})

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KET,
  api_secret: env.CLOUDINARY_SECRET_KET,
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
app.register(uploadsRoutes)
