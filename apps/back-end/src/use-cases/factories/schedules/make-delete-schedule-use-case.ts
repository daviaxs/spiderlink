import { DeleteScheduleUseCase } from '@/use-cases/schedules/delete-schedule'
import { factorySchedulesRepository } from '../factories-repositories/factory-schedules-repository'

export function makeDeleteScheduleUseCase() {
  const deleteScheduleUseCase = new DeleteScheduleUseCase(
    factorySchedulesRepository,
  )

  return deleteScheduleUseCase
}
