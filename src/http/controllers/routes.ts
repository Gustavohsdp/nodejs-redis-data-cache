import { FastifyInstance } from 'fastify'
import { cleanCacheRedis } from './clean-cache-redis'

export async function routes(app: FastifyInstance) {
  app.post('/clean-cache', cleanCacheRedis)
}
