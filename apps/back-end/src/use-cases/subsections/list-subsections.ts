import { ProductsRepository } from '@/repositories/products-repository'
import { SubsectionsRepository } from '@/repositories/subsections-repository'
import { ProductNotFoundError } from '../errors/product-not-found-error'

export class ListSubsectionsUseCase {
  constructor(
    private subsectionsRepository: SubsectionsRepository,
    private productsRepository: ProductsRepository,
  ) {}

  async execute(productId: string, domainId: string) {
    const product = await this.productsRepository.findProductById(productId)

    if (!product) {
      throw new ProductNotFoundError()
    }

    const subsections = await this.subsectionsRepository.listSubsections(
      productId,
      domainId,
    )

    return { subsections }
  }
}
