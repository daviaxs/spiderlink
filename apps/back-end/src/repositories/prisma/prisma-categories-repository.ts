import { Prisma } from '@prisma/client'
import { CategoriesRepository } from '../categories-repository'
import { prismaClient } from '@/lib/prisma'

export class PrismaCategoriesRepository implements CategoriesRepository {
  async addCategory(category: Prisma.CategoriesCreateInput) {
    const newCategory = await prismaClient.categories.create({
      data: category,
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
