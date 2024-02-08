import { factoryProductsRepository } from '../factories-repositories/factory-products-repository'
import { DeleteProductUseCase } from '@/use-cases/products/delete-product'

export function makeDeleteProductUseCase() {
  const deleteProductUseCase = new DeleteProductUseCase(
    factoryProductsRepository,
  )

  return deleteProductUseCase
}
