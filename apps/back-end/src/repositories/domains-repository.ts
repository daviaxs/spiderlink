import { Domain, Prisma } from '@prisma/client'

export interface DomainsRepository {
  addDomain(domain: Prisma.DomainCreateInput): Promise<Domain | null>

  updateDomain(
    domain: Prisma.DomainUpdateInput,
    domainName: string,
  ): Promise<Prisma.DomainUpdateInput>

  deleteDomain(domainName: string): Promise<void>

  findDomainById(domainId: string): Promise<Domain | null>
  findDomainByName(domainName: string): Promise<Domain | null>
}
