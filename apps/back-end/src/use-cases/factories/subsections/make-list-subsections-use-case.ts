import { factorySubsectionsRepository } from '../factories-repositories/factory-subsections-repository'
import { ListSubsectionsUseCase } from '@/use-cases/subsections/list-subsections'
import { factoryProductsRepository } from '../factories-repositories/factory-products-repository'

export function makeListSubsectionsUseCase() {
  const listSubsectionsUseCase = new ListSubsectionsUseCase(
    factorySubsectionsRepository,
    factoryProductsRepository,
  )

  return listSubsectionsUseCase
}
