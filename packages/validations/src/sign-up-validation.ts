import { z } from 'zod';
import { signInValidation } from './sign-in-validation';

export const signUpValidation = signInValidation.extend({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
});

export type SignUpValidation = z.infer<typeof signUpValidation>;
