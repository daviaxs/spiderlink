import { Options, Prisma } from '@prisma/client'

export interface OptionsRepository {
  addOption(option: Prisma.OptionsCreateInput): Promise<Options | null>
  updateOption(option: Prisma.OptionsUpdateInput): Promise<Options | null>
  deleteOption(id: string): Promise<void>
}
