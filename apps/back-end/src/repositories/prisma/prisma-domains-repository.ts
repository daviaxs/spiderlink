import { Prisma } from '@prisma/client'
import { DomainsRepository } from '../domains-repository'
import { prismaClient } from '@/lib/prisma'

export class PrismaDomainsRepository implements DomainsRepository {
  async addDomain(domain: Prisma.DomainCreateInput) {
    const newDomain = await prismaClient.domain.create({
      data: domain,
    })

    return newDomain
  }

  async deleteDomain(domainName: string) {
    const domain = await prismaClient.domain.findUnique({
      where: {
        domainName,
      },
    })

    if (!domain) {
      throw new Error(`Domain [${domainName}] not found`)
    }

    await prismaClient.domain.delete({
      where: {
        id: domain.id,
      },
    })
  }
}
