import { CreateAccountUseCase } from '../../users/create-account'
import { factoryUsersRepository } from '../factories-repositories/factory-users-repository'
import { factoryDomainsRepository } from '../factories-repositories/factory-domains-repository'
export function makeCreateAccountUseCase() {
  const createAccountUseCase = new CreateAccountUseCase(
    factoryUsersRepository,
    factoryDomainsRepository,
  )

  return createAccountUseCase
}
