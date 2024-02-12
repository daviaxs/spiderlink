import { SchedulesRepository } from '@/repositories/schedules-repository'

export class FindScheduleUseCase {
  constructor(private schedulesRepository: SchedulesRepository) {}

  async execute(domainId: string) {
    const schedule = await this.schedulesRepository.findSchedule(domainId)

    return { schedule }
  }
}
