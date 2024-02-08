import { Prisma } from '@prisma/client'
import { ProductsRepository } from '../products-repository'
import { prismaClient } from '@/lib/prisma'

export class PrismaProductsRepository implements ProductsRepository {
  async addProduct(
    data: Prisma.ProductCreateInput,
    categoryName: string,
    domainId: string,
  ) {
    const product = await prismaClient.product.create({
      data: {
        ...data,
        category: {
          connect: {
            name: categoryName,
          },
        },
        Domain: {
          connect: {
            id: domainId,
          },
        },
      },
    })

    return product
  }

  async updateProduct(
    data: Prisma.ProductUpdateInput,
    domainId: string,
    productId: string,
  ) {
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

  async deleteProduct(productId: string) {
    await prismaClient.product.delete({
      where: {
        id: productId,
      },
    })
  }

  async listProducts(domainId: string, categoryName: string) {
    const products = prismaClient.product.findMany({
      where: {
        category: {
          Domain: {
            id: domainId,
          },
          name: categoryName,
        },
      },
    })

    return products
  }

  async findProductByName(
    productName: string,
    categoryName: string,
    domainName: string,
  ) {
    const product = prismaClient.product.findFirst({
      where: {
        name: productName,
        category: {
          Domain: {
            domainName,
          },
          name: categoryName,
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
