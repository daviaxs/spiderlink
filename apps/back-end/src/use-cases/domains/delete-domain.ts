import { DomainsRepository } from '@/repositories/domains-repository'

export class DeleteDomainUseCase {
  constructor(private domainsRepository: DomainsRepository) {}

  async execute(domainName: string) {
    if (!domainName) {
      throw new Error('Domain name is required')
    }

    await this.domainsRepository.deleteDomain(domainName)
  }
}
