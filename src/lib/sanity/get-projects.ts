import type { Testimonial } from '@/lib/sanity/get-testimonials';
import { type Image } from '@/lib/sanity/sanity-image';
import type { Locale } from '@/lib/sanity/types';
import groq from 'groq';
import { sanityClient } from 'sanity:client';

export type { Locale } from '@/lib/sanity/types';

type ImageSection = Image;

type TextSection = {
  _type: 'textblock';
  text: string;
};

type ImageTextSection = {
  _type: 'imageWithText';
  text: string;
  image: Image;
  imagePosition: 'left' | 'right';
};

type TestimonialSection = Testimonial;

type ProjectSection = {
  _type: 'textblock' | 'imageWithText' | 'testimonial' | 'image';
} & (TextSection | ImageTextSection | TestimonialSection | ImageSection);

type Project = {
  _id: string;
  _type: 'project';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  slug: { _type: 'slug'; current: string };
  date: string;
  description: string;
  poster: Image;
  sections: ProjectSection[];
  tags?: string[];
  githuburl?: string;
  projecturl?: string;
};

const projectQuery = groq`
  *[_type == "project"] | order(date desc) {
    _id, _type, _createdAt, _updatedAt, _rev,
    name,
    "description": coalesce(description[$locale], description.en),
    slug, date,
    tags,
    projecturl, githuburl,
    "poster": poster {
      ...,
      "alt": coalesce(alt[$locale], alt.en),
      asset->
    },
    "sections": sections[] {
      _key,
      _type,
      ...select(
        _type == "textblock" => {
          "text": coalesce(text[$locale], text.en)
        },
        _type == "imageWithText" => {
          "text": coalesce(text[$locale], text.en),
          imagePosition,
          "image": image {
            ...,
            "alt": coalesce(alt[$locale], alt.en),
            asset->
          }
        },
        _type == "testimonial" => {
          ...@-> {
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
        },
        _type == "image" => {
          ...,
          "alt": coalesce(alt[$locale], alt.en),
          asset->
        }
      )
    }
  }
`;

/**
 * Fetch all projects with content resolved for the given locale.
 * Falls back to en then de if a translation is missing.
 */
function getProjects(locale: Locale = 'en') {
  return sanityClient.fetch<Project[]>(projectQuery, { locale });
}

export { getProjects, type Project, type ProjectSection };
