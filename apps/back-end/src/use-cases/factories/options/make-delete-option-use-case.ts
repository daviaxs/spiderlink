import { DeleteOptionUseCase } from '@/use-cases/options/delete-option'
import { factoryOptionsRepository } from '../factories-repositories/factory-options-repository'

export function makeDeleteOptionUseCase() {
  const deleteOptiontUseCase = new DeleteOptionUseCase(factoryOptionsRepository)

  return deleteOptiontUseCase
}
