import { DeleteDomainUseCase } from '@/use-cases/domains/delete-domain'
import { factoryDomainsRepository } from '../factories-repositories/factory-domains-repository'

export function makeDeleteDomainUseCase() {
  const deleteDomainUseCase = new DeleteDomainUseCase(factoryDomainsRepository)

  return deleteDomainUseCase
}
