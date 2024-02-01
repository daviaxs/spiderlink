import { AuthenticateUseCase } from '../../authenticate'
import { factoryUsersRepository } from '../factories-repositories/factory-users-repository'

export function makeAuthenticateUseCase() {
  const authenticateUseCase = new AuthenticateUseCase(factoryUsersRepository)

  return authenticateUseCase
}
