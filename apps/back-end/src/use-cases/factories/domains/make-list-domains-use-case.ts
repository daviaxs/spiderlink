import { ListDomainsUseCase } from '@/use-cases/domains/list-domains'
import { factoryDomainsRepository } from '../factories-repositories/factory-domains-repository'

export function makeListDomainsUseCase() {
  const listDomainsUseCase = new ListDomainsUseCase(factoryDomainsRepository)

  return listDomainsUseCase
}
