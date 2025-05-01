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

export { getTestimonials, type Testimonial };
