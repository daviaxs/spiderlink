import { z } from 'zod'

export const phoneSchema = z.object({
  phone: z
    .string()
    .min(8, 'Número de telefone muito curto')
    .max(12, 'Número de telefone muito longo')
    .refine((value) => /^[0-9]+$/.test(value), {
      message: 'O número de telefone só pode conter números',
      path: ['phone'],
    }),
})

export type phoneSchemaData = z.infer<typeof phoneSchema>
