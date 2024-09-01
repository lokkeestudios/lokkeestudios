import { z } from 'zod';

const contactSubmissionSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name cannot be empty' })
    .max(60, { message: 'Name cannot exceed 60 characters' }),
  email: z.string().email(),
  message: z
    .string()
    .min(1, { message: 'Message cannot be empty' })
    .max(1800, { message: 'Message cannot exceed 1800 characters' }),
});

export { contactSubmissionSchema };
