import type { Image } from '@/lib/sanity-image';
import { useSanityClient } from '@sanity/astro';
import groq from 'groq';

interface Testimonial {
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
}

const sanityClient = useSanityClient();

function getTestimonials() {
  const query = groq`
    *[_type == "testimonial"] { 
      ...,
      "logo": logo { ..., asset-> },
      "avatar": avatar { ..., asset-> },
    }
  `;

  return sanityClient.fetch<Testimonial[]>(query);
}

export default getTestimonials;
export type { Image, Testimonial };
