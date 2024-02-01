import { UsersRepository } from '@/repositories/users-repository'
import { UserNotFoundError } from './errors/user-not-found-error'

interface deleteUserParams {
  userId: string
}

export class DeleteUserUseCase {
  constructor(private userRepository: UsersRepository) {}

  async execute({ userId }: deleteUserParams) {
    const user = await this.userRepository.findUserById(userId)

    if (!user) {
      throw new UserNotFoundError()
    }

    await this.userRepository.deleteUser(userId)
  }
}
