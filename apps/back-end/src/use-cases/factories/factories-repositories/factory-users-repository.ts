import { env } from '@/env'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'

export const factoryUsersRepository =
  env.NODE_ENV === 'prod'
    ? new PrismaUsersRepository()
    : new InMemoryUsersRepository()
