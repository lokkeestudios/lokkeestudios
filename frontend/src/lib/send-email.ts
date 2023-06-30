import type contactSubmissionSchema from '@/lib/validations/contact-submission';
// import ky from 'ky';
import emailjs from '@emailjs/browser';
import type { z } from 'zod';

const {
  PUBLIC_EMAILJS_SERVICE_ID,
  PUBLIC_EMAILJS_TEMPLATE_ID,
  PUBLIC_EMAILJS_PUBLIC_KEY,
} = import.meta.env;

type ContactSubmission = z.infer<typeof contactSubmissionSchema>;

function sendEmail(contactData: ContactSubmission) {
  // return ky.post('/api/email', { json: contactData });
  return emailjs.send(
    PUBLIC_EMAILJS_SERVICE_ID,
    PUBLIC_EMAILJS_TEMPLATE_ID,
    contactData,
    PUBLIC_EMAILJS_PUBLIC_KEY,
  );
}

export default sendEmail;
