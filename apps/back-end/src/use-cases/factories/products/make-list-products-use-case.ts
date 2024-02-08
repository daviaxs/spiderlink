import { ListProductsUseCase } from '@/use-cases/products/list-products'
import { factoryProductsRepository } from '../factories-repositories/factory-products-repository'

export function makeListProductsUseCase() {
  const listProductsUseCase = new ListProductsUseCase(factoryProductsRepository)

  return listProductsUseCase
}
