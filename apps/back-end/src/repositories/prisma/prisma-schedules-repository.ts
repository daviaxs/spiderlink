import { Prisma } from '@prisma/client'
import { SchedulesRepository } from '../schedules-repository'
import { FindDomainIdVerification } from '../verifications/find-domain-id'
import { prismaClient } from '@/lib/prisma'

export class PrismaSchedulesRepository implements SchedulesRepository {
  async addSchedule(schedule: Prisma.ScheduleCreateInput, domainId: string) {
    const domainVerification = new FindDomainIdVerification(domainId)
    await domainVerification.execute()

    const newSchedule = await prismaClient.schedule.create({
      data: {
        ...schedule,
        Domain: {
          connect: {
            id: domainId,
          },
        },
      },
    })

    return newSchedule
  }

  async updateSchedule(
    schedule: Prisma.ScheduleUpdateInput,
    scheduleId: string,
    domainId: string,
  ) {
    const domainVerification = new FindDomainIdVerification(domainId)
    await domainVerification.execute()

    const updatedSchedule = await prismaClient.schedule.update({
      where: {
        id: scheduleId,
      },
      data: {
        ...schedule,
      },
    })

    return updatedSchedule
  }

  async findSchedule(scheduleId: string, domainId: string) {
    const domainVerification = new FindDomainIdVerification(domainId)
    await domainVerification.execute()

    const schedule = await prismaClient.schedule.findUnique({
      where: {
        id: scheduleId,
        Domain: {
          id: domainId,
        },
      },
    })

    return schedule
  }

  async deleteSchedule(scheduleId: string, domainId: string) {
    const domainVerification = new FindDomainIdVerification(domainId)
    await domainVerification.execute()

    await prismaClient.schedule.delete({
      where: {
        id: scheduleId,
        Domain: {
          id: domainId,
        },
      },
    })
  }
}
