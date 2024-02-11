import { AddOptionUseCase } from '@/use-cases/options/add-option'
import { factoryOptionsRepository } from '../factories-repositories/factory-options-repository'

export function makeAddOptionUseCase() {
  const addOptiontUseCase = new AddOptionUseCase(factoryOptionsRepository)

  return addOptiontUseCase
}
