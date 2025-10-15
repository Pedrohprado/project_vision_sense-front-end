import { z } from 'zod';

export const signupSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  password: z.string().min(4),
  confirmPassword: z.string().min(4),
});

export type SignupSchemaProps = z.infer<typeof signupSchema>;
