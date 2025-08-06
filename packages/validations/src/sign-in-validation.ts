import { z } from 'zod';

export const signInValidation = z.object({
  email: z.email(),
  password: z.string().min(6),
});

export type SignInValidation = z.infer<typeof signInValidation>;
