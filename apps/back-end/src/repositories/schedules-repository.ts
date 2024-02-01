import { Prisma, Schedules } from '@prisma/client'

export interface SchedulesRepository {
  addSchedule(schedule: Prisma.SchedulesCreateInput): Promise<Schedules | null>

  updateSchedule(
    schedule: Prisma.SchedulesUpdateInput,
  ): Promise<Schedules | null>

  findScheduleByUserId(userId: number): Promise<Schedules | null>

  deleteSchedule(id: number): Promise<void>
}
