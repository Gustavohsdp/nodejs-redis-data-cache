import { makeUserUseCase } from '@/use-cases/factories/make-users-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function findAll(request: FastifyRequest, reply: FastifyReply) {
  const usersUseCase = makeUserUseCase()

  const { users } = await usersUseCase.execute()

  return reply.status(200).send(users)
}
