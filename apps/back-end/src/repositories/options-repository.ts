import { Option, Prisma } from '@prisma/client'

export interface OptionsRepository {
  addOption(
    option: Prisma.OptionCreateInput,
    subsectionId: string,
    domainId: string,
  ): Promise<Option | null>

  updateOption(
    option: Prisma.OptionUpdateInput,
    optionId: string,
    domainId: string,
  ): Promise<Option | null>

  deleteOption(id: string, domainId: string): Promise<void>

  listOptions(subsectionId: string, domainId: string): Promise<Option[]>

  findOptionById(optionId: string, domainId: string): Promise<Option | null>
}
