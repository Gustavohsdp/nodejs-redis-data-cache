import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { FindAllUseCase } from './../users/find-all-use-case'

export function makeUserUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const findAllUseCase = new FindAllUseCase(prismaUsersRepository)

  return findAllUseCase
}
