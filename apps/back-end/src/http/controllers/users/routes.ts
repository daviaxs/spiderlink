import { FastifyInstance } from 'fastify'
import { createAccount } from './createAccount'
import { authenticate } from './authenticate'
import { deleteUser } from './deleteUser'
import { VerifyJWT } from '@/http/middlewares/verify-jwt'
import { getUserProfile } from './getUserProfile'
import { updateUser } from './updateUser'
import { VerifyJWTRule } from '@/http/middlewares/verify-jwt-rule'
import { refresh } from './refresh'
import { verifyToken } from './verifyToken'
import { logout } from './logout'

export async function userRoutes(app: FastifyInstance) {
  app.get('/users/profile', { onRequest: [VerifyJWT] }, getUserProfile)
  app.get('/token/verify/:id', verifyToken)

  app.post('/users', createAccount)
  app.post('/users/authenticate', authenticate)
  app.post('/token/refresh', { onRequest: [VerifyJWT] }, refresh)

  app.post('/users/logout', logout)

  app.patch('/users/:id', { onRequest: [VerifyJWTRule('OWNER')] }, updateUser)

  app.delete(
    '/users/:userId',
    { onRequest: [VerifyJWTRule('OWNER')] },
    deleteUser,
  )
}
