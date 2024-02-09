import { ListProductsUseCase } from '@/use-cases/products/list-products'
import { factoryProductsRepository } from '../factories-repositories/factory-products-repository'
import { factoryCategoriesRepository } from '../factories-repositories/factory-categories-repository'

export function makeListProductsUseCase() {
  const listProductsUseCase = new ListProductsUseCase(
    factoryProductsRepository,
    factoryCategoriesRepository,
  )

  return listProductsUseCase
}
