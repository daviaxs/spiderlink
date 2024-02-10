import { factorySubsectionsRepository } from '../factories-repositories/factory-subsections-repository'
import { DeleteSubsectionUseCase } from '@/use-cases/subsections/delete-subsection'

export function makeDeleteSubsectionUseCase() {
  const deleteSubsectionUseCase = new DeleteSubsectionUseCase(
    factorySubsectionsRepository,
  )

  return deleteSubsectionUseCase
}
