import { FindScheduleUseCase } from '@/use-cases/schedules/find-schedule'
import { factorySchedulesRepository } from '../factories-repositories/factory-schedules-repository'

export function makeFindScheduleUseCase() {
  const findScheduleUseCase = new FindScheduleUseCase(
    factorySchedulesRepository,
  )

  return findScheduleUseCase
}
