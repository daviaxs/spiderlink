import { Prisma, Schedule } from '@prisma/client'

export interface SchedulesRepository {
  addSchedule(
    schedule: Prisma.ScheduleCreateInput,
    domainId: string,
  ): Promise<Schedule | null>

  updateSchedule(
    schedule: Prisma.ScheduleUpdateInput,
    scheduleId: string,
    domainId: string,
  ): Promise<Schedule | null>

  findSchedule(scheduleId: string, domainId: string): Promise<Schedule | null>

  deleteSchedule(scheduleId: string, domainId: string): Promise<void>
}
