import { OptionsRepository } from '@/repositories/options-repository'
import { SubsectionsRepository } from '@/repositories/subsections-repository'
import { SubsectionNotFoundError } from '../errors/subsection-not-found-error'

export class ListOptionsUseCase {
  constructor(
    private optionsRepository: OptionsRepository,
    private subsectionsRepository: SubsectionsRepository,
  ) {}

  async execute(subsectionId: string, domainId: string) {
    const subsectionNotFound =
      await this.subsectionsRepository.findSubsectionById(subsectionId)

    if (!subsectionNotFound) {
      throw new SubsectionNotFoundError()
    }

    const options = await this.optionsRepository.listOptions(
      subsectionId,
      domainId,
    )

    return { options }
  }
}
