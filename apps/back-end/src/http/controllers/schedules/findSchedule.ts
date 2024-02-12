import { FastifyReply, FastifyRequest } from 'fastify'
import { handleError } from '../../utils/handleError'
import { makeFindScheduleUseCase } from '@/use-cases/factories/schedules/make-find-schedule-use-case'
import { z } from 'zod'

export async function findSchedule(req: FastifyRequest, reply: FastifyReply) {
  const paramsBodySchema = z.object({
    domainId: z.string(),
  })

  const parsed = paramsBodySchema.safeParse(req.params)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { domainId } = parsed.data

  try {
    const findScheduleUseCase = makeFindScheduleUseCase()

    const { schedule } = await findScheduleUseCase.execute(domainId)

    return reply.status(200).send({ schedule })
  } catch (err) {
    handleError(err, reply)
  }
}
