import { Prisma } from '@prisma/client'
import { CategoriesRepository } from '../categories-repository'
import { prismaClient } from '@/lib/prisma'
import { DomainWhereUniqueInput } from '@/@types/prisma'

export class PrismaCategoriesRepository implements CategoriesRepository {
  async addCategory(
    category: Prisma.CategoriesCreateInput,
    domainName: string,
  ) {
    const domain = await prismaClient.domain.findUnique({
      where: {
        name: domainName,
      } as DomainWhereUniqueInput,
    })

    if (!domain) {
      throw new Error(`Domain [${domainName}] not found`)
    }

    const newCategory = await prismaClient.categories.create({
      data: {
        ...category,
        Domain: {
          connect: {
            id: domain.id,
          },
        },
      },
    })

    return newCategory
  }

  async deleteCategory(id: string): Promise<void> {
    await prismaClient.categories.delete({
      where: {
        id,
      },
    })
  }

  listCategories(domainName: string) {
    const categories = prismaClient.categories.findMany({
      where: {
        Domain: {
          name: domainName,
        },
      },
      include: { Domain: true },
    })

    return categories
  }
}
