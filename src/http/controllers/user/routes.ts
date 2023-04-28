import { FastifyInstance } from 'fastify'
import { findAll } from './findAll'

export async function userRoutes(app: FastifyInstance) {
  app.get('/users', findAll)
}
