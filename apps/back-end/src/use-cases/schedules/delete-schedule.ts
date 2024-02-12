import { SchedulesRepository } from '@/repositories/schedules-repository'

export class DeleteScheduleUseCase {
  constructor(private schedulesRepository: SchedulesRepository) {}

  async execute(scheduleId: string, domainId: string) {
    const deletedSchedule = await this.schedulesRepository.deleteSchedule(
      scheduleId,
      domainId,
    )

    return { deletedSchedule }
  }
}
