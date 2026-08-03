import contactSuccessImage from '@/assets/images/contact-success.svg';
import { IntroductionBooking } from '@/components/introduction-booking';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { Image } from '@/components/ui/image';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Caption, Heading } from '@/components/ui/typography';
import { siteConfig } from '@/lib/config/site';
import { sendEmail } from '@/lib/send-email';
import { contactSubmissionSchema } from '@/lib/validations/contact-submission';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { type z } from 'zod';

type ContactFormTranslations = {
  bookCall: string;
  preferEmail: string;
  company: string;
  name: string;
  email: string;
  message: string;
  submit: string;
  successTitle: string;
  successMessage: string;
  successImageAlt: string;
};

const defaultFormT: ContactFormTranslations = {
  bookCall: 'Book a call',
  preferEmail: 'Prefer to email?',
  company: 'Company',
  name: 'Name',
  email: 'Email',
  message: 'Message',
  submit: 'Hit us up',
  successTitle: 'We will be in touch with you',
  successMessage: 'Successful',
  successImageAlt: 'A flying paper plane',
};

type ContactFormProps = {
  translations?: ContactFormTranslations;
};

function ContactThing({ translations: t = defaultFormT }: ContactFormProps) {
  return (
    <Tabs defaultValue="call">
      <TabsList>
        <TabsTrigger value="call">{t.bookCall}</TabsTrigger>
        <TabsTrigger value="form">{t.preferEmail}</TabsTrigger>
      </TabsList>
      <TabsContent
        forceMount
        value="call"
        className="data-[state=inactive]:hidden"
      >
        <IntroductionBooking />
      </TabsContent>
      <TabsContent value="form">
        <ContactFormInner translations={t} />
      </TabsContent>
    </Tabs>
  );
}

type FormData = z.infer<typeof contactSubmissionSchema>;

function ContactFormInner({ translations: t = defaultFormT }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(contactSubmissionSchema),
    mode: 'onTouched',
  });

  async function onSubmit(contactData: FormData) {
    await sendEmail(contactData);
  }

  return isSubmitSuccessful ? (
    <div>
      <Caption>{t.successMessage}</Caption>
      <Heading>{t.successTitle}</Heading>
      <Image
        metadata={contactSuccessImage}
        alt={t.successImageAlt}
      />
    </div>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset
        disabled={isSubmitting}
        className="group flex flex-col gap-y-6"
      >
        <div>
          <Label htmlFor="contact-form-company">{t.company}</Label>
          <Input
            id="contact-form-company"
            type="text"
            className={errors.company ? 'border-error' : ''}
            {...register('company', { required: true })}
          />
          {errors.company && (
            <p className="text-error mt-2 flex items-center text-sm">
              <Icons.Warning
                aria-hidden
                className="me-2 inline size-5"
              />
              {errors.company.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="contact-form-name">{t.name}</Label>
          <Input
            id="contact-form-name"
            type="text"
            className={errors.name ? 'border-error' : ''}
            {...register('name', { required: true })}
          />
          {errors.name && (
            <p className="text-error mt-2 flex items-center text-sm">
              <Icons.Warning
                aria-hidden
                className="me-2 inline size-5"
              />
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="contact-form-email">{t.email}</Label>
          <Input
            id="contact-form-email"
            type="email"
            className={errors.email ? 'border-error' : ''}
            {...register('email', { required: true })}
          />
          {errors.email && (
            <p className="text-error mt-2 flex items-center text-sm">
              <Icons.Warning
                aria-hidden
                className="me-2 inline size-5"
              />
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <Label
            htmlFor="contact-form-message"
            className="flex items-center justify-between"
          >
            <span>{t.message}</span>
            <span className="text-neutrals-500 capitalize">Max 1800 characters</span>
          </Label>
          <Textarea
            id="contact-form-message"
            className={errors.message ? 'border-error' : ''}
            {...register('message', { required: true })}
          />
          {errors.message && (
            <p className="text-error mt-2 flex items-center text-sm">
              <Icons.Warning
                aria-hidden
                className="me-2 inline size-5"
              />
              {errors.message.message}
            </p>
          )}
        </div>
        <div className="flex max-sm:flex-col-reverse max-sm:gap-y-6 sm:items-center sm:justify-between">
          <a
            className="text-neutrals-300 hover:text-neutrals-50 focus-visible:text-neutrals-50 inline-flex items-center transition-colors"
            href={`mailto:${siteConfig.email}`}
            title={t.submit}
          >
            <Icons.Envelope
              aria-hidden="true"
              className="me-2 inline size-5"
            />
            {siteConfig.email}
          </a>
          <Button
            type="submit"
            className="disabled:cursor-progress max-sm:w-full"
          >
            {t.submit}
            <Icons.Spinner
              aria-hidden
              className="ms-2 inline size-5 opacity-70 group-enabled:hidden"
            />
            <Icons.Rocket
              aria-hidden
              className="ms-2 inline size-5 group-disabled:hidden"
            />
          </Button>
        </div>
        {errors.root && (
          <p className="text-error mt-2 flex items-center text-sm">
            <Icons.Warning
              aria-hidden
              className="me-2 inline size-5"
            />
            {errors.root.message}
          </p>
        )}
      </fieldset>
    </form>
  );
}

export { ContactThing as ContactForm };
