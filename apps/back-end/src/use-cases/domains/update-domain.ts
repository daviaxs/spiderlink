import { DomainsRepository } from '@/repositories/domains-repository'
import { Prisma } from '@prisma/client'

export class UpdateDomainUseCase {
  constructor(private domainsRepository: DomainsRepository) {}

  async execute(
    domainId: string,
    { address, cep, deliveryTime, name, phone, cnpj }: Prisma.DomainUpdateInput,
  ) {
    const domain = await this.domainsRepository.updateDomain(
      {
        address,
        cep,
        deliveryTime,
        name,
        phone,
        cnpj,
      },
      domainId,
    )

    if (!domain) {
      throw new Error('Domain not found')
    }

    return { domain }
  }
}