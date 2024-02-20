import { z } from 'zod'
import { validateSchedule } from '../functions/validateSchedule'

const daysWeek = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom']

export const scheduleSchema = z.object(
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

export type scheduleSchemaData = z.infer<typeof scheduleSchema>
