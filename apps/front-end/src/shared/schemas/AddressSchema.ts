import { z } from 'zod'

export const addressSchema = z.object({
  address: z.string().min(5, 'Endereço muito curto'),
})

export type addressSchemaData = z.infer<typeof addressSchema>
