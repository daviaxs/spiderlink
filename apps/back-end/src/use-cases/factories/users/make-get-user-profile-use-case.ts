import { GetUserProfileUseCase } from '@/use-cases/users/get-user-profile'
import { factoryUsersRepository } from '../factories-repositories/factory-users-repository'

export function makeGetUserProfileUseCase() {
  const getUserProfileUseCase = new GetUserProfileUseCase(
    factoryUsersRepository,
  )

  return getUserProfileUseCase
}
