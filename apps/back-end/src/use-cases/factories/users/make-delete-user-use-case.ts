import { DeleteUserUseCase } from '@/use-cases/users/delete-user'
import { factoryUsersRepository } from '../factories-repositories/factory-users-repository'

export function makeDeleteUserUseCase() {
  const deleteUserUseCase = new DeleteUserUseCase(factoryUsersRepository)

  return deleteUserUseCase
}
