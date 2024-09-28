import { siteConfig } from '@/config/site';
import { ContactSubmissionConfirmationEmail } from '@/emails/contact-submission-confirmation';
import { resend } from '@/lib/resend';
import { contactSubmissionSchema } from '@/lib/validations/contact-submission';
import { type APIRoute } from 'astro';

const prerender = false;

const SENDER_EMAIL = siteConfig.email;
const NOREPLY_EMAIL = 'noreply@lokkeestudios.com';

const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const parsedData = contactSubmissionSchema.safeParse(data);

  if (!parsedData.success) {
    const { issues } = parsedData.error;

    return new Response(JSON.stringify(issues), { status: 400 });
  }

  const { name, email, message } = parsedData.data;

  return resend.emails
    .send({
      from: `Noreply LOKKEE STUDIOS <${NOREPLY_EMAIL}>`,
      to: SENDER_EMAIL,
      replyTo: email,
      subject: `${name} ― LOKKEE STUDIOS Inquiry`,
      text: message,
    })
    .then(async () => {
      await resend.emails.send({
        from: `Noreply LOKKEE STUDIOS <${NOREPLY_EMAIL}>`,
        to: email,
        subject: `Thanks for getting in touch ${name}!`,
        react: ContactSubmissionConfirmationEmail({ name, email, message }),
      });

      return new Response(
        JSON.stringify({
          message: 'Email sent successfully',
        }),
        {
          status: 200,
        },
      );
    })
    .catch(
      (error) =>
        new Response(JSON.stringify(error), {
          status: 500,
        }),
    );
};

export { POST, prerender };
