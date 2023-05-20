// import siteConfig from '@/config/site';
// import mail from '@sendgrid/mail';
import type { APIRoute } from 'astro';

export const prerender = false;

// const SENDER_EMAIL = siteConfig.email;
// const { SENDGRID_API_KEY } = import.meta.env;

// mail.setApiKey(SENDGRID_API_KEY);

const post: APIRoute = async (test) => {
  console.log(test);
  // const body: unknown = await request.json();

  // console.log(body);
  await new Promise((resolve) => setTimeout(resolve, 1));

  return new Response(
    JSON.stringify({
      message: 'it is ok',
    }),
    { status: 200 },
  );

  // const response = contactSubmissionSchema.safeParse(body);

  // if (!response.success) {
  //   const { errors } = response.error;

  //   return new Response(
  //     JSON.stringify({
  //       message: 'Invalid email request',
  //       errors,
  //     }),
  //     { status: 400 },
  //   );
  // }

  // const { name, email, message } = response.data;

  // return mail
  //   .send({
  //     to: SENDER_EMAIL,
  //     from: SENDER_EMAIL,
  //     replyTo: email,
  //     subject: `LOKKEE STUDIOS Inquiry | ${name}`,
  //     text: message,
  //   })
  //   .then(
  //     () =>
  //       new Response(
  //         JSON.stringify({
  //           message: 'Email sent successfully',
  //         }),
  //         {
  //           status: 200,
  //         },
  //       ),
  //   )
  //   .catch(
  //     () =>
  //       new Response(
  //         JSON.stringify({
  //           message: `Email failed to send`,
  //         }),
  //         {
  //           status: 500,
  //         },
  //       ),
  //   );
};

export { post };
