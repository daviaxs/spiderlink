import { Domain, Prisma } from '@prisma/client'

export interface DomainsRepository {
  addDomain(domain: Prisma.DomainCreateInput): Promise<Domain | null>

  updateDomain(
    domain: Prisma.DomainUpdateInput,
    domainId: string,
  ): Promise<Prisma.DomainUpdateInput>

  listDomains(domains?: Prisma.DomainFindManyArgs): Promise<Domain[]>
  deleteDomain(domainName: string): Promise<void>

  findDomainById(domainId: string): Promise<Domain | null>
  findDomainByName(domainName: string): Promise<Domain | null>
}
