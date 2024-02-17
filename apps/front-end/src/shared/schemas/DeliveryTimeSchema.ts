import { z } from 'zod'

export const deliveryTimeSchema = z.object({
  deliveryTime: z.string().min(3),
})

export type deliveryTimeSchemaData = z.infer<typeof deliveryTimeSchema>
