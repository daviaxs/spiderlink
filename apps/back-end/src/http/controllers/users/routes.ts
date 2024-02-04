import { FastifyInstance } from 'fastify'
import { createAccount } from './createAccount'
import { authenticate } from './authenticate'

export async function userRoutes(app: FastifyInstance) {
  app.post('/users', createAccount)
  app.post('/users/authenticate', authenticate)
}
