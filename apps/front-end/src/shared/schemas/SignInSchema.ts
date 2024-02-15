import { z } from 'zod'

export const signIpSchema = z.object({
  email: z.string().email('E-mail inválido'),

  password: z
    .string()
    .min(6, 'A senha precisa de no mínimo 6 caracteres')
    .max(30, 'Limite de 30 caracteres excedido'),

  domainName: z.string().optional(),
})

export type signInUserData = z.infer<typeof signIpSchema>
