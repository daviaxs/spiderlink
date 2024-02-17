import { z } from 'zod'

export const cepSchema = z.object({
  cep: z.string().min(8).max(8),
})

export type cepSchemaData = z.infer<typeof cepSchema>
