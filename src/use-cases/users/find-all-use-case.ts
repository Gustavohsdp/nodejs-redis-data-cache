import { redis } from '@/lib/redis'
import { REDIS_CACHE_KEY } from '@/utils/redis-constant'
import { User } from '@prisma/client'
import { UsersRepository } from './../../repositories/users-repository'

interface FindAllUseCaseResponse {
  users: User[]
}

export class FindAllUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<FindAllUseCaseResponse> {
    const cachedUsers = await redis.get(REDIS_CACHE_KEY)

    if (cachedUsers) {
      console.log('retornou do cache')

      return { users: JSON.parse(cachedUsers) }
    }

    const users = await this.usersRepository.findAll()

    if (!users) {
      throw new Error('Users not found')
    }

    await redis.set(REDIS_CACHE_KEY, JSON.stringify(users))

    return { users }
  }
}
