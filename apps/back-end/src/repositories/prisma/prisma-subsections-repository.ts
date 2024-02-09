import { Prisma } from '@prisma/client'
import { SubsectionsRepository } from '../subsections-repository'
import { prismaClient } from '@/lib/prisma'

export class PrismaSubsectionsRepository implements SubsectionsRepository {
  async addSubsection(
    subSection: Prisma.SubsectionCreateInput,
    productId: string,
    domainId: string,
  ) {
    const domain = await prismaClient.domain.findUnique({
      where: {
        id: domainId,
      },
    })

    if (!domain) {
      throw new Error(`Domain not found`)
    }

    const product = await prismaClient.product.findUnique({
      where: {
        id: productId,
      },
    })

    if (!product) {
      throw new Error(`Product not found`)
    }

    const newSubsection = await prismaClient.subsection.create({
      data: {
        ...subSection,
        Product: {
          connect: {
            id: productId,
          },
        },
        Domain: {
          connect: {
            id: domainId,
          },
        },
      },
    })

    return newSubsection
  }

  async updateSubsection(
    data: Prisma.SubsectionUpdateInput,
    subSectionId: string,
    domainId: string,
  ) {
    const subSection = await prismaClient.subsection.findUnique({
      where: {
        id: subSectionId,
      },
    })

    if (!subSection) {
      throw new Error(`Subsction not found`)
    }

    const subSectionUpdated = await prismaClient.subsection.update({
      where: {
        id: subSectionId,
      },
      data: {
        ...data,
        Domain: {
          connect: {
            id: domainId,
          },
        },
      },
    })

    return subSectionUpdated
  }

  async deleteSubsection(id: string): Promise<void> {
    const subSection = await prismaClient.subsection.findUnique({
      where: {
        id,
      },
    })

    if (!subSection) {
      throw new Error(`Subsection not found`)
    }

    await prismaClient.subsection.delete({
      where: {
        id,
      },
    })
  }

  async listSubsections(productId: string, domainId: string) {
    const subSections = await prismaClient.subsection.findMany({
      where: {
        Product: {
          id: productId,
          Domain: {
            id: domainId,
          },
        },
      },
    })

    return subSections
  }

  async findSubsectionById(subsectionId: string) {
    const subSection = await prismaClient.subsection.findUnique({
      where: {
        id: subsectionId,
      },
    })

    return subSection
  }
}
