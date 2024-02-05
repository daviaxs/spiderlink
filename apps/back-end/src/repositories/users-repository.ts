import { Prisma, User } from '@prisma/client'

export interface UsersRepository {
  findUserByEmail(email: string): Promise<User | null>
  findUserById(id: string): Promise<User | null>
  createUser(user: Prisma.UserCreateInput): Promise<User>
  updateUser(data: Prisma.UserUpdateInput, userId: string): Promise<User | null>
  deleteUser(id: string): Promise<void>
}
