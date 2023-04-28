import { redis } from '@/lib/redis'
import { REDIS_CACHE_KEY } from '@/utils/redis-constant'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function cleanCacheRedis(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    await redis.del(REDIS_CACHE_KEY)

    return reply.status(200).send({
      message: 'redis data cache successfully cleared',
    })
  } catch (err) {
    console.log(err)
    return reply.status(409).send({
      message: 'Error clearing data cache',
    })
  }
}
