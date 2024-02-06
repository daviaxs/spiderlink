import { DomainsRepository } from '@/repositories/domains-repository'

export class ListDomainsUseCase {
  constructor(private domainsRepository: DomainsRepository) {}

  async execute() {
    const domains = await this.domainsRepository.listDomains()

    return { domains }
  }
}
