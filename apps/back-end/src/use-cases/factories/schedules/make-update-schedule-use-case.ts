import { factorySchedulesRepository } from '../factories-repositories/factory-schedules-repository'
import { UpdateScheduleUseCase } from '@/use-cases/schedules/update-schedule'

export function makeUpdateScheduleUseCase() {
  const updateScheduleUseCase = new UpdateScheduleUseCase(
    factorySchedulesRepository,
  )

  return updateScheduleUseCase
}
