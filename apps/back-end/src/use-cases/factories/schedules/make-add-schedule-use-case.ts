import { AddScheduleUseCase } from '@/use-cases/schedules/add-schedule'
import { factorySchedulesRepository } from '../factories-repositories/factory-schedules-repository'

export function makeAddScheduleUseCase() {
  const addScheduleUseCase = new AddScheduleUseCase(factorySchedulesRepository)

  return addScheduleUseCase
}
