import { OptionsRepository } from '@/repositories/options-repository'
import { Prisma } from '@prisma/client'

export class AddOptionUseCase {
  constructor(private optionsRepository: OptionsRepository) {}

  async execute(
    { name, price, description }: Prisma.OptionCreateInput,
    subsectionId: string,
    domainId: string,
  ) {
    const newOption = await this.optionsRepository.addOption(
      {
        name,
        price,
        description,
        Subsection: {
          connect: {
            id: subsectionId,
          },
        },
        Domain: {
          connect: {
            id: domainId,
          },
        },
      },
      subsectionId,
      domainId,
    )

    return { option: newOption }
  }
}
