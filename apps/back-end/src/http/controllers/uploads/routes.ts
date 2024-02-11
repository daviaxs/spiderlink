import { VerifyJWT } from '@/http/middlewares/verify-jwt'
import { FastifyInstance } from 'fastify'
import { uploadImage } from './uploadImage'

export async function uploadsRoutes(app: FastifyInstance) {
  app.post('/upload', { onRequest: [VerifyJWT] }, uploadImage)
}
