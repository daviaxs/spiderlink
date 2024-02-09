import { ProductsRepository } from '@/repositories/products-repository'
import { Prisma } from '@prisma/client'
import { ProductNotFoundError } from '../errors/product-not-found-error'

export class UpdateProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(
    { img, name, price, description }: Prisma.ProductUpdateInput,
    domainId: string,
    productId: string,
  ) {
    const productNotFound =
      await this.productsRepository.findProductById(productId)

    if (!productNotFound) {
      throw new ProductNotFoundError()
    }

    const productUpdated = await this.productsRepository.updateProduct(
      {
        img,
        name,
        price,
        description,
      },
      domainId,
      productId,
    )

    return { product: productUpdated }
  }
}
