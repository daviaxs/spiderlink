import { Prisma, Subsection } from '@prisma/client'

export interface SubsectionsRepository {
  addSubsection(
    subSection: Prisma.SubsectionCreateInput,
    productId: string,
    domainId: string,
  ): Promise<Subsection | null>

  updateSubsection(
    subSection: Prisma.SubsectionUpdateInput,
    subSectionId: string,
    domainId: string,
  ): Promise<Subsection | null>

  deleteSubsection(id: string, domainId: string): Promise<void>

  listSubsections(productId: string, domainId: string): Promise<Subsection[]>

  findSubsectionById(subsectionId: string): Promise<Subsection | null>
}
