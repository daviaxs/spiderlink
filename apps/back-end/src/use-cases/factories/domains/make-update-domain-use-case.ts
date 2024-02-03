import { factoryDomainsRepository } from '../factories-repositories/factory-domains-repository'
import { UpdateDomainUseCase } from '@/use-cases/domains/update-domain'

export function makeUpdateDomainUseCase() {
  const updateDomainUseCase = new UpdateDomainUseCase(factoryDomainsRepository)

  return updateDomainUseCase
}
