import { CategoriesRepository } from '@/repositories/categories-repository'

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute(domainName: string) {
    const categories =
      await this.categoriesRepository.listCategories(domainName)

    return { categories }
  }
}
