import { OptionsRepository } from '@/repositories/options-repository'
import { Prisma } from '@prisma/client'

export class UpdateOptionUseCase {
  constructor(private optionsRepository: OptionsRepository) {}

  async execute(
    { name, price, description }: Prisma.OptionUpdateInput,
    optionId: string,
    domainId: string,
  ) {
    const updatedOption = await this.optionsRepository.updateOption(
      {
        name,
        price,
        description,
      },
      optionId,
      domainId,
    )

    return { option: updatedOption }
  }
}
