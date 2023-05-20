import type contactSubmissionSchema from '@/lib/validations/contact-submission';
import ky from 'ky';
import type { z } from 'zod';

type ContactSubmission = z.infer<typeof contactSubmissionSchema>;

function sendEmail(data: ContactSubmission) {
  return ky.post('/send-email', { json: data });
}

export default sendEmail;
