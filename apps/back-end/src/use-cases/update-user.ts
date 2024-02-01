import { UsersRepository } from '@/repositories/users-repository'
import { UserNotFoundError } from './errors/user-not-found-error'
import { UserInterfaceParams } from '@/interfaces/user-interface'

interface UpdateUserResponse {
  user: UserInterfaceParams | null
}

export class UpdateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(
    userId: string,
    data: UserInterfaceParams,
  ): Promise<UpdateUserResponse> {
    const user = await this.usersRepository.findUserById(userId)

    if (!user) {
      throw new UserNotFoundError()
    }

    const updatedUser = await this.usersRepository.updateUser(userId, data)

    return { user: updatedUser }
  }
}
