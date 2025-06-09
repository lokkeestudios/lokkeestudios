import type { Testimonial } from '@/lib/sanity/get-testimonials';
import { type Image } from '@/lib/sanity/sanity-image';
import groq from 'groq';
import { sanityClient } from 'sanity:client';

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

function getProjects() {
  const query = groq`
    *[_type == "project"] | order(date desc) { 
      ...,
      "poster": poster { ..., asset-> },
      "sections": sections[] {
        _key,
        _type,
        ...select(
          _type == "textblock" => { text },
          _type == "imageWithText" => {
            ...,
            "image": image { ..., asset-> }
          },
          _type == "testimonial" => {
            ...@-> {
              ...,
              "logo": logo { ..., asset-> },
              "avatar": avatar { ..., asset-> }
            }
          },
          _type == "image" => { ..., asset-> }
        )
      }
    }
  `;

  return sanityClient.fetch<Project[]>(query);
}

export { getProjects, type Project, type ProjectSection };
