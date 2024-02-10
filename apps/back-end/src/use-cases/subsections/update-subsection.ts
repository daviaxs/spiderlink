import { SubsectionsRepository } from '@/repositories/subsections-repository'
import { Prisma } from '@prisma/client'
import { SubsectionNotFoundError } from '../errors/subsection-not-found-error'

export class UpdateSubsectionUseCase {
  constructor(private subsectionsRepository: SubsectionsRepository) {}

  async execute(
    { name, multipleChoice, limit, required }: Prisma.SubsectionUpdateInput,
    subSectionId: string,
    domainId: string,
  ) {
    const subsectionNotFound =
      await this.subsectionsRepository.findSubsectionById(subSectionId)

    if (!subsectionNotFound) {
      throw new SubsectionNotFoundError()
    }

    const updatedSubsection = await this.subsectionsRepository.updateSubsection(
      {
        name,
        multipleChoice,
        limit,
        required,
      },
      subSectionId,
      domainId,
    )

    return { subsection: updatedSubsection }
  }
}
