import { FastifyInstance } from 'fastify'
import { createAccount } from './createAccount'
import { authenticate } from './authenticate'
import { deleteUser } from './deleteUser'
import { VerifyJWT } from '@/http/middlewares/verify-jwt'

export async function userRoutes(app: FastifyInstance) {
  app.post('/users', createAccount)
  app.post('/users/authenticate', authenticate)
  app.delete('/users/:userId', { onRequest: [VerifyJWT] }, deleteUser)
}
