import { ProductsRepository } from '@/repositories/products-repository'

export class ListProductsUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(domainName: string, categoryName: string) {
    const products = await this.productsRepository.listProducts(
      domainName,
      categoryName,
    )

    return { products }
  }
}
