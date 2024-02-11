import { factoryOptionsRepository } from '../factories-repositories/factory-options-repository'
import { ListOptionsUseCase } from '@/use-cases/options/list-options'
import { factorySubsectionsRepository } from '../factories-repositories/factory-subsections-repository'

export function makeListOptionsUseCase() {
  const listOptionstUseCase = new ListOptionsUseCase(
    factoryOptionsRepository,
    factorySubsectionsRepository,
  )

  return listOptionstUseCase
}
