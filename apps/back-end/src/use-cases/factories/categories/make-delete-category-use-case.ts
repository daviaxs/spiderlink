import { factoryCategoriesRepository } from '../factories-repositories/factory-categories-repository'
import { DeleteCategoryUseCase } from '@/use-cases/categories/delete-category'

export function makeDeleteCategoryUseCase() {
  const deleteCategoryUseCase = new DeleteCategoryUseCase(
    factoryCategoriesRepository,
  )

  return deleteCategoryUseCase
}
