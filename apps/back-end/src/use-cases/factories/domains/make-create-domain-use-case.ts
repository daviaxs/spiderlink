import { CreateDomainUseCase } from '@/use-cases/domains/create-domain'
import { factoryDomainsRepository } from '../factories-repositories/factory-domains-repository'

export function makeCreateDomainUseCase() {
  const createDomainUseCase = new CreateDomainUseCase(factoryDomainsRepository)

  return createDomainUseCase
}
