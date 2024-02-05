import { UsersRepository } from '@/repositories/users-repository'
import { Prisma } from '@prisma/client'
import { hash } from 'bcryptjs'

export class UpdateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(
    userId: string,
    { email, password_hash, role }: Prisma.UserUpdateInput,
  ) {
    let newPassword
    if (typeof password_hash === 'string') {
      newPassword = await hash(password_hash, 6)
    }

    const user = await this.usersRepository.updateUser(
      {
        email,
        password_hash: newPassword,
        role,
      },
      userId,
    )

    if (!user) {
      throw new Error('User not found')
    }

    return { user }
  }
}
