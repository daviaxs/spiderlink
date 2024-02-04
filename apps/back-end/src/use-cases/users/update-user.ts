import { UsersRepository } from '@/repositories/users-repository'
import { UserNotFoundError } from '../errors/user-not-found-error'
import { User } from '@prisma/client'

interface UpdateUserResponse {
  user: User | null
}

export class UpdateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(userId: string, data: User): Promise<UpdateUserResponse> {
    const user = await this.usersRepository.findUserById(userId)

    if (!user) {
      throw new UserNotFoundError()
    }

    const updatedUser = await this.usersRepository.updateUser(userId, data)

    return { user: updatedUser }
  }
}
