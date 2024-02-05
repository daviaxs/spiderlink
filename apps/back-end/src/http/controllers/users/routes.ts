import { FastifyInstance } from 'fastify'
import { createAccount } from './createAccount'
import { authenticate } from './authenticate'
import { deleteUser } from './deleteUser'
import { VerifyJWT } from '@/http/middlewares/verify-jwt'
import { getUserProfile } from './getUserProfile'

export async function userRoutes(app: FastifyInstance) {
  app.post('/users', createAccount)
  app.post('/users/authenticate', authenticate)
  app.get('/users/profile', { onRequest: [VerifyJWT] }, getUserProfile)
  app.delete('/users/:userId', { onRequest: [VerifyJWT] }, deleteUser)
}
