import { User } from '@prisma/client'
import { FastifyReply, FastifyRequest, RouteGenericInterface } from 'fastify'

interface RouteParams {
  domainId: string
}

interface MyRouteGenericInterface extends RouteGenericInterface {
  Params: RouteParams
}

export async function CheckUserDomainAccess(
  req: FastifyRequest<MyRouteGenericInterface>,
  reply: FastifyReply,
) {
  try {
    const user: User = await req.jwtVerify()

    if (!user) {
      return reply.status(403).send({ message: 'Access denied' })
    }

    if (user.role === 'ADMIN') {
      const domainId = req.params.domainId

      if (domainId !== user.domainId) {
        return reply.status(403).send({ message: 'Access denied' })
      }
    }
  } catch (err) {
    return reply.status(401).send({ message: 'Unauthorized' })
  }
}
