import { Prisma, Subsections } from '@prisma/client'

export interface SubsectionsRepository {
  addSubsection(
    subSection: Prisma.SubsectionsCreateInput,
  ): Promise<Subsections | null>

  updateSubsection(
    subSection: Prisma.SubsectionsUpdateInput,
  ): Promise<Subsections | null>

  deleteSubsection(id: number): Promise<void>
}
