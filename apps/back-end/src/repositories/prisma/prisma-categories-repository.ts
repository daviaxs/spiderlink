import { Prisma } from '@prisma/client'
import { CategoriesRepository } from '../categories-repository'
import { prismaClient } from '@/lib/prisma'

export class PrismaCategoriesRepository implements CategoriesRepository {
  async addCategory(category: Prisma.CategoryCreateInput, domainId: string) {
    const domain = await prismaClient.domain.findUnique({
      where: {
        id: domainId,
      },
    })

    if (!domain) {
      throw new Error(`Domain not found`)
    }

    const newCategory = await prismaClient.category.create({
      data: {
        ...category,
        Domain: {
          connect: {
            id: domainId,
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

  async listCategories(domainId: string) {
    const categories = prismaClient.category.findMany({
      where: {
        Domain: {
          id: domainId,
        },
      },
    })

    return categories
  }

  findCategoryByName(categoryName: string, domainId: string) {
    const category = prismaClient.category.findFirst({
      where: {
        name: categoryName,
        Domain: {
          id: domainId,
        },
      },
    })

    return category
  }
}
