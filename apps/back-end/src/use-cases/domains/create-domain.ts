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
    deliveryCost,
  }: Prisma.DomainCreateInput) {
    const domainExists =
      await this.domainsRepository.findDomainByName(domainName)

    if (domainExists) {
      throw new Error('Domain already exists')
    }

    const domain = await this.domainsRepository.addDomain({
      name,
      phone,
      domainName,
      deliveryTime,
      cep,
      address,
      cnpj,
      deliveryCost,
    })

    return { domain }
  }
}
