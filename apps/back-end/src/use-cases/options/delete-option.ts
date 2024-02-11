import { OptionsRepository } from '@/repositories/options-repository'
import { OptionNotFoundError } from '../errors/option-not-found-error'

export class DeleteOptionUseCase {
  constructor(private optionsRepository: OptionsRepository) {}

  async execute(optionId: string, domainId: string) {
    const optionNotFound = await this.optionsRepository.findOptionById(
      optionId,
      domainId,
    )

    if (!optionNotFound) {
      throw new OptionNotFoundError()
    }

    await this.optionsRepository.deleteOption(optionId, domainId)
  }
}
