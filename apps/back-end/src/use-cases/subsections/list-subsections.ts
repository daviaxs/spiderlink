import { ProductsRepository } from '@/repositories/products-repository'
import { SubsectionsRepository } from '@/repositories/subsections-repository'
import { SubsectionNotFoundError } from '../errors/subsection-not-found-error'

export class ListSubsectionsUseCase {
  constructor(
    private subsectionsRepository: SubsectionsRepository,
    private productsRepository: ProductsRepository,
  ) {}

  async execute(productId: string, domainId: string) {
    const product = await this.productsRepository.findProductById(productId)

    if (!product) {
      throw new SubsectionNotFoundError()
    }

    const subsections = await this.subsectionsRepository.listSubsections(
      productId,
      domainId,
    )

    return { subsections }
  }
}
