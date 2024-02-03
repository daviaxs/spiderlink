import { Domain, Prisma } from '@prisma/client'

export interface DomainsRepository {
  addDomain(domain: Prisma.DomainCreateInput): Promise<Prisma.DomainCreateInput>

  updateDomain(
    domain: Prisma.DomainUpdateInput,
    domainName: string,
  ): Promise<Prisma.DomainUpdateInput>

  deleteDomain(domainName: string): Promise<void>

  findDomain(domainId: string): Promise<Domain | null>
}
