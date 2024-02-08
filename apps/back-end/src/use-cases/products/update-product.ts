import { ProductsRepository } from '@/repositories/products-repository'
import { Prisma } from '@prisma/client'
import { ProductNotFoundError } from '../errors/product-not-found-error'

export class UpdateProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(
    product: Prisma.ProductUpdateInput,
    domainName: string,
    productId: string,
  ) {
    const productNotFound =
      await this.productsRepository.findProductById(productId)

    if (!productNotFound) {
      throw new ProductNotFoundError()
    }

    const productUpdated = await this.productsRepository.updateProduct(
      product,
      domainName,
      productId,
    )

    return { product: productUpdated }
  }
}
