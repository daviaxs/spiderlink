import { DeleteUserUseCase } from '@/use-cases/delete-user'
import { factoryUsersRepository } from '../factories-repositories/factory-users-repository'

export function makeDeleteUserUseCase() {
  const deleteUserUseCase = new DeleteUserUseCase(factoryUsersRepository)

  return deleteUserUseCase
}
