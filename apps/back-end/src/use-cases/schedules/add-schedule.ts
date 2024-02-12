import { SchedulesRepository } from '@/repositories/schedules-repository'
import { Prisma } from '@prisma/client'

export class AddScheduleUseCase {
  constructor(private schedulesRepository: SchedulesRepository) {}

  async execute(
    { seg, ter, qua, qui, sex, sab, dom }: Prisma.ScheduleCreateInput,
    domainId: string,
  ) {
    const schedule = await this.schedulesRepository.addSchedule(
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
      domainId,
    )

    return { schedule }
  }
}
