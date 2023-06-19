import { z } from 'zod';

// implement ZOD error handler

// request -> validation
// body -> object
// data -> object

const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is required',
    }),
    password: z.string().optional(),
  }),
});

export const UserValidation = {
  createUserZodSchema,
};

// end ZOD error handler
