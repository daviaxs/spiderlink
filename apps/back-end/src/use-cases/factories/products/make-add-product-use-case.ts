import { AddProductUseCase } from '@/use-cases/products/add-product'
import { factoryProductsRepository } from '../factories-repositories/factory-products-repository'
import { factoryCategoriesRepository } from '../factories-repositories/factory-categories-repository'

export function makeAddProductUseCase() {
  const addProductUseCase = new AddProductUseCase(
    factoryProductsRepository,
    factoryCategoriesRepository,
  )

  return addProductUseCase
}
