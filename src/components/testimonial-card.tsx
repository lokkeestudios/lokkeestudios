import SanityImage from '@/components/ui/sanity-image';
import type { Testimonial } from '@/lib/sanity/get-testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <li className="relative mr-8 h-full w-[32rem] max-w-[80vw] flex-[0_0_auto] rounded-lg border border-neutrals-200/20 bg-radial-highlight p-4 md:p-8">
      <article className="flex h-full flex-col justify-between gap-y-2">
        <blockquote className="max-w-prose leading-relaxed text-neutrals-200 max-lg:text-sm">
          &quot;{testimonial.quote}&quot;
        </blockquote>
        <div className="mt-6 flex items-center">
          <div className="mr-3 flex">
            <div className="bg-shiny-frame h-10 w-10 overflow-hidden rounded-full border border-transparent">
              <SanityImage
                image={testimonial.logo ?? testimonial.avatar}
                sizes="160px"
                width={40}
                height={40}
                maxWidth={160}
                className="h-full w-full"
              />
            </div>
            {testimonial.logo && (
              <div className="bg-shiny-frame -ml-3 h-10 w-10 overflow-hidden rounded-full border border-transparent">
                <SanityImage
                  image={testimonial.avatar}
                  sizes="160px"
                  width={40}
                  height={40}
                  maxWidth={160}
                  className="h-full w-full"
                />
              </div>
            )}
          </div>
          <div>
            <cite>
              <h3 className="lg:text-md mb-0.5 not-italic">{testimonial.name}</h3>
            </cite>
            <p className="text-xs text-neutrals-200 lg:text-sm">{testimonial.title}</p>
          </div>
        </div>
      </article>
    </li>
  );
}

export default TestimonialCard;
