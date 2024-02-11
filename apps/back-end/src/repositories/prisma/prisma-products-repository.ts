import { Prisma } from '@prisma/client'
import { ProductsRepository } from '../products-repository'
import { prismaClient } from '@/lib/prisma'
import { FindDomainIdVerification } from '../verifications/find-domain-id'

export class PrismaProductsRepository implements ProductsRepository {
  async addProduct(
    product: Prisma.ProductCreateInput,
    categoryId: string,
    domainId: string,
  ) {
    const domainVerification = new FindDomainIdVerification(domainId)
    await domainVerification.execute()

    const category = await prismaClient.category.findUnique({
      where: {
        id: categoryId,
      },
    })

    if (!category) {
      throw new Error(`Category not found`)
    }

    const newProduct = await prismaClient.product.create({
      data: {
        ...product,
        Category: {
          connect: {
            id: categoryId,
          },
        },
        Domain: {
          connect: {
            id: domainId,
          },
        },
      },
    })

    return newProduct
  }

  async updateProduct(
    data: Prisma.ProductUpdateInput,
    domainId: string,
    productId: string,
  ) {
    const domainVerification = new FindDomainIdVerification(domainId)
    await domainVerification.execute()

    const product = await prismaClient.product.update({
      where: {
        id: productId,
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

    return product
  }

  async deleteProduct(productId: string, domainId: string) {
    const domainVerification = new FindDomainIdVerification(domainId)
    await domainVerification.execute()

    await prismaClient.product.delete({
      where: {
        id: productId,
        domainId,
      },
    })
  }

  async listProducts(categoryId: string, domainId: string) {
    const domainVerification = new FindDomainIdVerification(domainId)
    await domainVerification.execute()

    const products = prismaClient.product.findMany({
      where: {
        Category: {
          id: categoryId,
          Domain: {
            id: domainId,
          },
        },
      },
    })

    return products
  }

  async findProductByName(productName: string, domainId: string) {
    const domainVerification = new FindDomainIdVerification(domainId)
    await domainVerification.execute()

    const product = prismaClient.product.findFirst({
      where: {
        name: productName,
        Domain: {
          id: domainId,
        },
      },
    })

    return product
  }

  findProductById(productId: string) {
    const product = prismaClient.product.findFirst({
      where: {
        id: productId,
      },
    })

    return product
  }
}
