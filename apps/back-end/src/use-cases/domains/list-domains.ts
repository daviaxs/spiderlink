import { DomainsRepository } from '@/repositories/domains-repository'

export class ListDomainsUseCase {
  constructor(private domainsRepository: DomainsRepository) {}

  async execute() {
    const domains = await this.domainsRepository.listDomains({
      include: {
        User: {
          select: {
            id: true,
            email: true,
            role: true,
          },
        },
      },
    })

    return { domains }
  }
}
