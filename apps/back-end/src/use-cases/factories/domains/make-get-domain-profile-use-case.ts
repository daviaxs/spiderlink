import { factoryDomainsRepository } from '../factories-repositories/factory-domains-repository'
import { GetDomainProfileUseCase } from '@/use-cases/domains/get-domain-profile'

export function makeGetDomainProfileUseCase() {
  const getDomainProfileUseCase = new GetDomainProfileUseCase(
    factoryDomainsRepository,
  )

  return getDomainProfileUseCase
}
