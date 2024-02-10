import { SubsectionsRepository } from '@/repositories/subsections-repository'
import { SubsectionNotFoundError } from '../errors/subsection-not-found-error'

export class DeleteSubsectionUseCase {
  constructor(private subsectionsRepository: SubsectionsRepository) {}

  async execute(subsectionId: string, domainId: string) {
    const subsectionNotFound =
      await this.subsectionsRepository.findSubsectionById(subsectionId)

    if (!subsectionNotFound) {
      throw new SubsectionNotFoundError()
    }

    await this.subsectionsRepository.deleteSubsection(subsectionId, domainId)
  }
}
