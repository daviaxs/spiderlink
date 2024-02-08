import { CategoriesRepository } from '@/repositories/categories-repository'

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute(domainId: string) {
    const categories = await this.categoriesRepository.listCategories(domainId)

    return { categories }
  }
}
