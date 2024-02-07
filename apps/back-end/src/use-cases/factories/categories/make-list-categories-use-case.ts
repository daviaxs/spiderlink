import { factoryCategoriesRepository } from '../factories-repositories/factory-categories-repository'
import { ListCategoriesUseCase } from '@/use-cases/categories/list-categories'

export function makeListCategoriesUseCase() {
  const listCategoriesUseCase = new ListCategoriesUseCase(
    factoryCategoriesRepository,
  )

  return listCategoriesUseCase
}
