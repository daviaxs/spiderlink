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

  async updateDomain(domain: Prisma.DomainUpdateInput, domainId: string) {
    const updatedDomain = await prismaClient.domain.update({
      where: {
        id: domainId,
      },
      data: domain,
    })

    return updatedDomain
  }

  async listDomains() {
    const domains = await prismaClient.domain.findMany()

    return domains
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

  findDomainById(domainId: string) {
    const domain = prismaClient.domain.findUnique({
      where: {
        id: domainId,
      },
    })

    return domain
  }

  findDomainByName(domainName: string) {
    const domain = prismaClient.domain.findUnique({
      where: {
        domainName,
      },
    })

    return domain
  }
}
