import fastify from 'fastify'
import { ZodError } from 'zod'
import { routes } from './http/controllers/routes'
import { userRoutes } from './http/controllers/user/routes'

export const app = fastify()

app.register(routes)
app.register(userRoutes)

app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  return reply.status(500).send({ message: 'Internal server error' })
})
