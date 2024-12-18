import { CategoriesRepository } from '@/repositories/categories-repository'

export class DeleteCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute(categoryId: string, domainId: string) {
    await this.categoriesRepository.deleteCategory(categoryId, domainId)
  }
}
