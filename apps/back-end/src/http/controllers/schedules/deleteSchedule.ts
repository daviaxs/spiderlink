import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../../utils/handleError'
import { makeDeleteScheduleUseCase } from '@/use-cases/factories/schedules/make-delete-schedule-use-case'

export async function deleteSchedule(req: FastifyRequest, reply: FastifyReply) {
  const paramsBodySchema = z.object({
    domainId: z.string(),
    scheduleId: z.string(),
  })

  const parsed = paramsBodySchema.safeParse(req.params)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { domainId, scheduleId } = parsed.data

  try {
    const deleteScheduleUseCase = makeDeleteScheduleUseCase()

    await deleteScheduleUseCase.execute(scheduleId, domainId)

    return reply.status(200).send({ message: 'Schedule deleted' })
  } catch (err) {
    handleError(err, reply)
  }
}
