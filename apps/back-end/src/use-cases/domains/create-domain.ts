import { DomainsRepository } from '@/repositories/domains-repository'
import { Prisma } from '@prisma/client'

export class CreateDomainUseCase {
  constructor(private domainsRepository: DomainsRepository) {}

  async execute({
    address,
    cep,
    deliveryTime,
    domainName,
    name,
    phone,
    cnpj,
  }: Prisma.DomainCreateInput) {
    const domain = await this.domainsRepository.addDomain({
      name,
      phone,
      domainName,
      deliveryTime,
      cep,
      address,
      cnpj,
    })

    return { domain }
  }
}
