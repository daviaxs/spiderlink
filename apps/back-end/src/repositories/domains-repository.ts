import { Prisma } from '@prisma/client'

export interface DomainsRepository {
  addDomain(domain: Prisma.DomainCreateInput): Promise<Prisma.DomainCreateInput>
  deleteDomain(domainName: string): Promise<void>
}
