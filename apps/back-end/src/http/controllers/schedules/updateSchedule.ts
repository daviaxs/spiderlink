import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { handleError } from '../../utils/handleError'
import { makeUpdateScheduleUseCase } from '@/use-cases/factories/schedules/make-update-schedule-use-case'
import { validateSchedule } from '@/http/utils/validateSchedule'

export async function updateSchedule(req: FastifyRequest, reply: FastifyReply) {
  const daysWeek = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom']

  const paramsBodySchema = z.object({
    domainId: z.string(),
    scheduleId: z.string(),
  })

  const scheduleBodySchema = z.object(
    Object.fromEntries(
      daysWeek.map((day) => [
        day,
        z
          .object({
            inicio: z
              .string()
              .min(4)
              .max(4)
              .refine((value) => validateSchedule(value), {
                message:
                  'Horário de início inválido. Por favor, verifique os campos.',
              }),
            termino: z
              .string()
              .min(4)
              .max(4)
              .refine((value) => validateSchedule(value), {
                message:
                  'Horário de término inválido. Por favor, verifique os campos.',
              }),
            fechado: z.boolean(),
          })
          .optional(),
      ]),
    ),
  )

  const parsed = paramsBodySchema.safeParse(req.params)
  const parsedBody = scheduleBodySchema.safeParse(req.body)

  if (!parsed.success) {
    const message = parsed.error.errors[0].message
    return reply.status(400).send({ message })
  }

  if (!parsedBody.success) {
    const message = parsedBody.error.errors[0].message
    return reply.status(400).send({ message })
  }

  const { domainId, scheduleId } = parsed.data
  const schedule = parsedBody.data

  try {
    const updateScheduleUseCase = makeUpdateScheduleUseCase()

    const updatedSchedule = await updateScheduleUseCase.execute(
      {
        ...schedule,
        Domain: {
          connect: {
            id: domainId,
          },
        },
      },
      domainId,
      scheduleId,
    )

    return reply
      .status(201)
      .send({ message: 'Schedule updated', updatedSchedule })
  } catch (err) {
    handleError(err, reply)
  }
}
