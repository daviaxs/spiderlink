import { SubsectionsRepository } from '@/repositories/subsections-repository'

export class ListSubsectionsUseCase {
  constructor(private subsectionsRepository: SubsectionsRepository) {}

  async execute(productId: string, domainId: string) {
    const subsections = await this.subsectionsRepository.listSubsections(
      productId,
      domainId,
    )

    return { subsections }
  }
}
