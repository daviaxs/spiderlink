import { AddSubsectionUseCase } from '@/use-cases/subsections/add-subsection'
import { factorySubsectionsRepository } from '../factories-repositories/factory-subsections-repository'

export function makeAddSubsectionUseCase() {
  const addSubsectionUseCase = new AddSubsectionUseCase(
    factorySubsectionsRepository,
  )

  return addSubsectionUseCase
}
