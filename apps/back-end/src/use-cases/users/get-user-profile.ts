import { UserInterfaceParams } from '@/interfaces/user-interface'
import { UsersRepository } from '@/repositories/users-repository'
import { UserNotFoundError } from '../errors/user-not-found-error'

interface GetUserProfileParams {
  userId: string
}

interface GetUserProfileResponse {
  user: UserInterfaceParams
}

export class GetUserProfileUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    userId,
  }: GetUserProfileParams): Promise<GetUserProfileResponse> {
    const user = await this.usersRepository.findUserById(userId)

    if (!user) {
      throw new UserNotFoundError()
    }

    return { user }
  }
}
