import { AddCategoryUseCase } from '@/use-cases/categories/add-category'
import { factoryCategoriesRepository } from '../factories-repositories/factory-categories-repository'

export function makeAddCategoryUseCase() {
  const addCategoryUseCase = new AddCategoryUseCase(factoryCategoriesRepository)

  return addCategoryUseCase
}
