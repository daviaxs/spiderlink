import { prismaClient } from '@/lib/prisma'

export class FindDomainIdVerification {
  constructor(private domainId: string) {}

  async execute() {
    const domain = await prismaClient.domain.findUnique({
      where: {
        id: this.domainId,
      },
    })

    if (!domain) {
      throw new Error('Domain not found')
    }
  }
}
