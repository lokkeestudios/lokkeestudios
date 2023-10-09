import type contactSubmissionSchema from '@/lib/validations/contact-submission';
import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import type { z } from 'zod';

type FormData = z.infer<typeof contactSubmissionSchema>;

type ContactSubmissionConfirmationEmailProps = FormData;

function ContactSubmissionConfirmationEmail({
  name,
  email,
}: ContactSubmissionConfirmationEmailProps) {
  const previewText = `Thanks for getting in touch${name && ` ${name}`}!`;

  return (
    <Html>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2',
            format: 'woff2',
          }}
          fontWeight={700}
          fontStyle="normal"
        />
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                primary: '#6919FF',
                neutrals: {
                  900: '#060918',
                  800: '#161A2C',
                  700: '#23263B',
                  600: '#2E364F',
                  500: '#4D5775',
                  400: '#6F7A9B',
                  300: '#96A1C0',
                  200: '#C7D0E5',
                  100: '#F0F2FE',
                  50: '#FFFEF9',
                },
                success: '#00F090',
                warning: '#FFDC30',
                error: '#FF2E5B',
              },
            },
          },
        }}
      >
        <Body className="mx-auto my-auto bg-neutrals-900 font-sans">
          <Container className="my-[48px] w-[512px] rounded-md border-[0.5px] border-solid border-neutrals-200/20 p-[48px] shadow-lg">
            <Section>
              <Img
                src="https://lokkeestudios.com/android-chrome-icon-512x512.png"
                alt="LOKKEE STUDIOS"
                width={64}
                height={64}
                className="mx-auto"
              />
              <Heading className="my-[32px] text-center text-[24px] font-normal text-neutrals-50">
                Thanks for getting in touch
                {name && (
                  <>
                    {' '}
                    <strong>{name}</strong>
                  </>
                )}
                !
              </Heading>
              <Text className="text-[14px] leading-[24px] text-neutrals-50">
                Hi{name && <> {name}</>},
              </Text>
              <Text className="text-[14px] leading-[24px] text-neutrals-50">
                I will get back to you
                {email && (
                  <>
                    {' '}
                    (
                    <Link
                      href={`mailto:${email}`}
                      title="Open your email"
                      className="text-primary no-underline"
                    >
                      {email}
                    </Link>
                    )
                  </>
                )}{' '}
                as soon as possible.
              </Text>
              <Text className="mb-0 text-[14px] leading-[24px] text-neutrals-50">
                Have a good one!
              </Text>
              <Text className="mt-0 text-[14px] leading-[24px] text-neutrals-50">
                Kilian
              </Text>
              <Hr className="my-[24px] border-[0.5px] border-solid border-neutrals-200/20" />
              <Text className="my-0 text-xs leading-loose text-neutrals-300">
                You are receiving this email because you have recently submitted
                an inquiry via the contact form on{' '}
                <a
                  href="https://lokkeestudios.com"
                  className="text-neutrals-100 no-underline"
                >
                  lokkeestudios.com
                </a>
                . This is an automatic notification, please do not reply to this
                email!
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ContactSubmissionConfirmationEmail;
