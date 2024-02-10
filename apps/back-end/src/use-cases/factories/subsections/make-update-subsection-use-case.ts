import { UpdateSubsectionUseCase } from '@/use-cases/subsections/update-subsection'
import { factorySubsectionsRepository } from '../factories-repositories/factory-subsections-repository'

export function makeUpdateSubsectionUseCase() {
  const updateSubsectionUseCase = new UpdateSubsectionUseCase(
    factorySubsectionsRepository,
  )

  return updateSubsectionUseCase
}
