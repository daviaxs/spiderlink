import { Prisma } from '@prisma/client'
import { CategoriesRepository } from '../categories-repository'
import { prismaClient } from '@/lib/prisma'

export class PrismaCategoriesRepository implements CategoriesRepository {
  async addCategory(category: Prisma.CategorieCreateInput, domainName: string) {
    const domain = await prismaClient.domain.findUnique({
      where: {
        domainName,
      },
    })

    if (!domain) {
      throw new Error(`Domain [${domainName}] not found`)
    }

    const newCategory = await prismaClient.categorie.create({
      data: {
        ...category,
        Domain: {
          connect: {
            domainName,
          },
        },
      },
    })

    return newCategory
  }

  async deleteCategory(id: string): Promise<void> {
    await prismaClient.categorie.delete({
      where: {
        id,
      },
    })
  }

  async listCategories(domainName: string) {
    const categories = prismaClient.categorie.findMany({
      where: {
        Domain: {
          domainName,
        },
      },
      include: { Domain: true },
    })

    return categories
  }
}
