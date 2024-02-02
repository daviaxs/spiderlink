import { CreateAccountUseCase } from '../../users/create-account'
import { factoryUsersRepository } from '../factories-repositories/factory-users-repository'

export function makeCreateAccountUseCase() {
  const createAccountUseCase = new CreateAccountUseCase(factoryUsersRepository)

  return createAccountUseCase
}
