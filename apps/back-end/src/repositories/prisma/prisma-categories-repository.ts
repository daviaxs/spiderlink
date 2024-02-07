import { Prisma } from '@prisma/client'
import { CategoriesRepository } from '../categories-repository'
import { prismaClient } from '@/lib/prisma'

export class PrismaCategoriesRepository implements CategoriesRepository {
  async addCategory(category: Prisma.CategoryCreateInput, domainName: string) {
    const domain = await prismaClient.domain.findUnique({
      where: {
        domainName,
      },
    })

    if (!domain) {
      throw new Error(`Domain [${domainName}] not found`)
    }

    const newCategory = await prismaClient.category.create({
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
    await prismaClient.category.delete({
      where: {
        id,
      },
    })
  }

  async listCategories(domainName: string) {
    const categories = prismaClient.category.findMany({
      where: {
        Domain: {
          domainName,
        },
      },
    })

    return categories
  }

  findCategoryByName(categoryName: string, domainName: string) {
    const category = prismaClient.category.findFirst({
      where: {
        name: categoryName,
        Domain: {
          domainName,
        },
      },
    })

    return category
  }
}
