import { prisma } from '@/lib/prisma'
import { UsersRepository } from '../users-repository'

export class PrismaUsersRepository implements UsersRepository {
  async findAll() {
    const users = await prisma.user.findMany({
      orderBy: {
        id: 'desc',
      },
    })

    return users
  }
}
