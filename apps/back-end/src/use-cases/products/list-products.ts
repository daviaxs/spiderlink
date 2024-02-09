import { CategoriesRepository } from '@/repositories/categories-repository'
import { ProductsRepository } from '@/repositories/products-repository'
import { CategoryNotFoundError } from '../errors/category-not-found-error'

export class ListProductsUseCase {
  constructor(
    private productsRepository: ProductsRepository,
    private categoriesRepository: CategoriesRepository,
  ) {}

  async execute(categoryId: string, domainId: string) {
    const category =
      await this.categoriesRepository.findCategoryById(categoryId)

    if (!category) {
      throw new CategoryNotFoundError()
    }

    const products = await this.productsRepository.listProducts(
      categoryId,
      domainId,
    )

    return { products }
  }
}
