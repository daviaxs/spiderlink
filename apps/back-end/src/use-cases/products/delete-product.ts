import { ProductsRepository } from '@/repositories/products-repository'
import { ProductNotFoundError } from '../errors/product-not-found-error'

export class DeleteProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(productId: string, domainId: string) {
    const productNotFound =
      await this.productsRepository.findProductById(productId)

    if (!productNotFound) {
      throw new ProductNotFoundError()
    }

    await this.productsRepository.deleteProduct(productId, domainId)
  }
}
