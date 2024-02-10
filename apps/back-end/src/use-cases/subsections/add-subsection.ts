import { SubsectionsRepository } from '@/repositories/subsections-repository'
import { Prisma } from '@prisma/client'

export class AddSubsectionUseCase {
  constructor(private subsectionsRepository: SubsectionsRepository) {}

  async execute(
    { name, multipleChoice, limit, required }: Prisma.SubsectionCreateInput,
    productId: string,
    domainId: string,
  ) {
    const newSubsection = await this.subsectionsRepository.addSubsection(
      {
        name,
        multipleChoice,
        limit,
        required,
        Product: {
          connect: {
            id: productId,
          },
        },
        Domain: {
          connect: {
            id: domainId,
          },
        },
      },
      productId,
      domainId,
    )

    return { subsection: newSubsection }
  }
}
