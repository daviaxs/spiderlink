import { SchedulesRepository } from '@/repositories/schedules-repository'

export class FindScheduleUseCase {
  constructor(private schedulesRepository: SchedulesRepository) {}

  async execute(scheduleId: string, domainId: string) {
    const schedule = await this.schedulesRepository.findSchedule(
      scheduleId,
      domainId,
    )

    return { schedule }
  }
}
