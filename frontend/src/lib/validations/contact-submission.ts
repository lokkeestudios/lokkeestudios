import { z } from 'zod';

const contactSubmissionSchema = z.object({
  name: z
    .string()
    .nonempty({ message: 'Name cannot be empty' })
    .max(60, { message: 'Name cannot be longer than 60 characters' }),
  email: z.string().email(),
  message: z
    .string()
    .nonempty({ message: 'Message cannot be empty' })
    .max(1800, { message: 'Message cannot be longer than 1800 characters' }),
});

export default contactSubmissionSchema;
