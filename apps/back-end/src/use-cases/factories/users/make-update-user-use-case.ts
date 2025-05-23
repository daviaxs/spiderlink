import { UpdateUserUseCase } from '@/use-cases/users/update-user'
import { factoryUsersRepository } from '../factories-repositories/factory-users-repository'

export function makeUpdateUserUseCase() {
  const updateUserUseCase = new UpdateUserUseCase(factoryUsersRepository)

  return updateUserUseCase
}
