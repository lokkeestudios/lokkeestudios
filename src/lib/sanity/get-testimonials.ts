import type { Locale } from '@/lib/sanity/types';
import { type Image } from '@/lib/sanity/sanity-image';
import groq from 'groq';
import { sanityClient } from 'sanity:client';

type Testimonial = {
  _id: string;
  _type: 'testimonial';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  title: string;
  quote: string;
  logo: Image;
  avatar: Image;
};

const testimonialQuery = groq`
  *[_type == "testimonial"] {
    _id, _type, _createdAt, _updatedAt, _rev,
    name,
    "title": coalesce(title[$locale], title.en),
    "quote": coalesce(quote[$locale], quote.en),
    "logo": logo {
      ...,
      "alt": coalesce(alt[$locale], alt.en),
      asset->
    },
    "avatar": avatar {
      ...,
      "alt": coalesce(alt[$locale], alt.en),
      asset->
    }
  }
`;

/**
 * Fetch all testimonials with content resolved for the given locale.
 * Falls back to en then de if a translation is missing.
 */
function getTestimonials(locale: Locale = 'en') {
  return sanityClient.fetch<Testimonial[]>(testimonialQuery, { locale });
}

export { getTestimonials, type Testimonial };
