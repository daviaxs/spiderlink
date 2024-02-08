import { factoryProductsRepository } from '../factories-repositories/factory-products-repository'
import { UpdateProductUseCase } from '@/use-cases/products/update-product'

export function makeUpdateProductUseCase() {
  const updateProductUseCase = new UpdateProductUseCase(
    factoryProductsRepository,
  )

  return updateProductUseCase
}
