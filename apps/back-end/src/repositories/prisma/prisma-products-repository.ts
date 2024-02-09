import { Prisma } from '@prisma/client'
import { ProductsRepository } from '../products-repository'
import { prismaClient } from '@/lib/prisma'

export class PrismaProductsRepository implements ProductsRepository {
  async addProduct(
    product: Prisma.ProductCreateInput,
    categoryId: string,
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
    await prismaClient.product.delete({
      where: {
        id: productId,
        domainId,
      },
    })
  }

  async listProducts(categoryId: string, domainId: string) {
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

  async findProductByName(
    productName: string,
    categoryId: string,
    domainId: string,
  ) {
    const product = prismaClient.product.findFirst({
      where: {
        name: productName,
        Category: {
          id: categoryId,
          Domain: {
            id: domainId,
          },
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
