import { DomainsRepository } from '@/repositories/domains-repository'
import { DomainNotFoundError } from '../errors/domain-not-found'
import { Domain } from '@prisma/client'

interface GetDomainProfileParams {
  domainId: string
}

interface GetDomainProfileResponse {
  domain: Domain
}

export class GetDomainProfileUseCase {
  constructor(private domainsRepository: DomainsRepository) {}

  async execute({
    domainId,
  }: GetDomainProfileParams): Promise<GetDomainProfileResponse> {
    const domain = await this.domainsRepository.findDomainById(domainId)

    if (!domain) {
      throw new DomainNotFoundError()
    }

    return { domain }
  }
}
