import { AddProductUseCase } from '@/use-cases/products/add-product'
import { factoryProductsRepository } from '../factories-repositories/factory-products-repository'

export function makeAddProductUseCase() {
  const addProductUseCase = new AddProductUseCase(factoryProductsRepository)

  return addProductUseCase
}
