import { Prisma, User } from '@prisma/client'

export interface UsersRepository {
  findUserByEmail(email: string): Promise<User | null>
  findUserById(id: number): Promise<User | null>
  createUser(user: Prisma.UserCreateInput): Promise<User>
  updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User>
  deleteUser(id: number): Promise<void>
}
