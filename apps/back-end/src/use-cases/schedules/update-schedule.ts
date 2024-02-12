import { SchedulesRepository } from '@/repositories/schedules-repository'
import { Prisma } from '@prisma/client'

export class UpdateScheduleUseCase {
  constructor(private schedulesRepository: SchedulesRepository) {}

  async execute(
    { seg, ter, qua, qui, sex, sab, dom }: Prisma.ScheduleUpdateInput,
    scheduleId: string,
    domainId: string,
  ) {
    const updatedSchedule = await this.schedulesRepository.updateSchedule(
      {
        seg,
        ter,
        qua,
        qui,
        sex,
        sab,
        dom,
        Domain: {
          connect: {
            id: domainId,
          },
        },
      },
      scheduleId,
      domainId,
    )

    return { updatedSchedule }
  }
}
