import { AuthenticateUseCase } from '../../users/authenticate'
import { factoryDomainsRepository } from '../factories-repositories/factory-domains-repository'
import { factoryUsersRepository } from '../factories-repositories/factory-users-repository'

export function makeAuthenticateUseCase() {
  const authenticateUseCase = new AuthenticateUseCase(
    factoryUsersRepository,
    factoryDomainsRepository,
  )

  return authenticateUseCase
}
