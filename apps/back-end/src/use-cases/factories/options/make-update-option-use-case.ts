import { factoryOptionsRepository } from '../factories-repositories/factory-options-repository'
import { UpdateOptionUseCase } from '@/use-cases/options/update-option'

export function makeUpdateOptionUseCase() {
  const updateOptiontUseCase = new UpdateOptionUseCase(factoryOptionsRepository)

  return updateOptiontUseCase
}
