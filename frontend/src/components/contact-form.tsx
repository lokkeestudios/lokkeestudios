import contactSuccessImage from '@/assets/images/contact-success.svg';
import Button from '@/components/ui/button';
import Icons from '@/components/ui/icons';
import Image from '@/components/ui/image';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';
import Textarea from '@/components/ui/textarea';
import { Caption, Heading } from '@/components/ui/typography';
import sendEmail from '@/lib/send-email';
import contactSubmissionSchema from '@/lib/validations/contact-submission';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

type FormData = z.infer<typeof contactSubmissionSchema>;

function ContactForm() {
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
      <Caption>Successful</Caption>
      <Heading>I will be in touch with you</Heading>
      <Image
        metadata={contactSuccessImage}
        alt="A flying paper plane"
      />
    </div>
  ) : (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-6"
    >
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          className={errors.name ? 'border-error' : ''}
          {...register('name', { required: true })}
        />
        {errors.name && (
          <p className="mt-2 flex items-center text-sm text-error">
            <Icons.Warning
              aria-hidden
              className="mr-2 inline h-5 w-5"
            />
            {errors.name.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          className={errors.email ? 'border-error' : ''}
          {...register('email', { required: true })}
        />
        {errors.email && (
          <p className="mt-2 flex items-center text-sm text-error">
            <Icons.Warning
              aria-hidden
              className="mr-2 inline h-5 w-5"
            />
            {errors.email.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          className={errors.message ? 'border-error' : ''}
          {...register('message', { required: true })}
        />
        {errors.message && (
          <p className="mt-2 flex items-center text-sm text-error">
            <Icons.Warning
              aria-hidden
              className="mr-2 inline h-5 w-5"
            />
            {errors.message.message}
          </p>
        )}
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
      >
        Hit me up
        {isSubmitting ? (
          <Icons.Spinner className="ml-2 inline h-5 w-5 animate-spin" />
        ) : (
          <Icons.Rocket className="ml-2 inline h-5 w-5" />
        )}
      </Button>
      {errors.root && (
        <p className="mt-2 flex items-center text-sm text-error">
          <Icons.Warning
            aria-hidden
            className="mr-2 inline h-5 w-5"
          />
          {errors.root.message}
        </p>
      )}
    </form>
  );
}

export default ContactForm;
