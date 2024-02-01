import { Prisma } from '@prisma/client'
import { UsersRepository } from '../users-repository'
import { prismaClient } from '@/lib/prisma'

export class PrismaUsersRepository implements UsersRepository {
  async createUser(data: Prisma.UserCreateInput) {
    const user = await prismaClient.user.create({ data })

    return user
  }

  async findUserByEmail(email: string) {
    const user = await prismaClient.user.findUnique({ where: { email } })

    return user
  }

  async findUserById(id: string) {
    const user = await prismaClient.user.findUnique({ where: { id } })

    return user
  }

  async updateUser(id: string, data: Prisma.UserUpdateInput) {
    const user = await prismaClient.user.update({ where: { id }, data })

    return user
  }

  async deleteUser(id: string) {
    await prismaClient.user.delete({ where: { id } })
  }
}
