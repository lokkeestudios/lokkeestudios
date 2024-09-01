import { type contactSubmissionSchema } from '@/lib/validations/contact-submission';
import ky from 'ky';
import { type z } from 'zod';

type ContactSubmission = z.infer<typeof contactSubmissionSchema>;

function sendEmail(contactData: ContactSubmission) {
  return ky.post('/api/email', { json: contactData });
}

export { sendEmail };
