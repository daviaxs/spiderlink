import { FastifyInstance } from 'fastify'
import { createAccount } from './createAccount'

export async function userRoutes(app: FastifyInstance) {
  app.post('/users', createAccount)
}
