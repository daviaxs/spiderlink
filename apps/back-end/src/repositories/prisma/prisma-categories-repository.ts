import { Prisma } from '@prisma/client'
import { CategoriesRepository } from '../categories-repository'
import { prismaClient } from '@/lib/prisma'
import { FindDomainIdVerification } from '../verifications/find-domain-id'

export class PrismaCategoriesRepository implements CategoriesRepository {
  async addCategory(category: Prisma.CategoryCreateInput, domainId: string) {
    const domainVerification = new FindDomainIdVerification(domainId)
    await domainVerification.execute()

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

  async deleteCategory(id: string, domainId: string): Promise<void> {
    const domainVerification = new FindDomainIdVerification(domainId)
    await domainVerification.execute()

    await prismaClient.category.delete({
      where: {
        id,
        domainId,
      },
    })
  }

  async listCategories(domainId: string) {
    const domainVerification = new FindDomainIdVerification(domainId)
    await domainVerification.execute()

    const categories = prismaClient.category.findMany({
      where: {
        Domain: {
          id: domainId,
        },
      },
    })

    return categories
  }

  async findCategoryByName(categoryName: string, domainId: string) {
    const domainVerification = new FindDomainIdVerification(domainId)
    await domainVerification.execute()

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

  findCategoryById(categoryId: string) {
    const category = prismaClient.category.findUnique({
      where: {
        id: categoryId,
      },
    })

    return category
  }
}
