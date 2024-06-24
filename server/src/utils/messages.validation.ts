import { z } from 'zod'

export const messagesValidation = z.object({
  name: z.string(),
  email: z.string().email('email invalid'),
  message: z.string()
})
