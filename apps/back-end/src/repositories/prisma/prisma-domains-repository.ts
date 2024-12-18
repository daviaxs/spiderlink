import { Prisma } from '@prisma/client'
import { DomainsRepository } from '../domains-repository'
import { prismaClient } from '@/lib/prisma'
import { FindDomainIdVerification } from '../verifications/find-domain-id'

export class PrismaDomainsRepository implements DomainsRepository {
  async addDomain(domain: Prisma.DomainCreateInput) {
    const newDomain = await prismaClient.domain.create({
      data: domain,
    })

    return newDomain
  }

  async updateDomain(domain: Prisma.DomainUpdateInput, domainId: string) {
    const domainVerification = new FindDomainIdVerification(domainId)
    await domainVerification.execute()

    const updatedDomain = await prismaClient.domain.update({
      where: {
        id: domainId,
      },
      data: domain,
    })

    return updatedDomain
  }

  async listDomains(options?: Prisma.DomainFindManyArgs) {
    return prismaClient.domain.findMany(options)
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

  async findDomainById(domainId: string) {
    const domainVerification = new FindDomainIdVerification(domainId)
    await domainVerification.execute()

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
