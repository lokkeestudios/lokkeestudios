import type { Testimonial } from '@/lib/sanity/get-testimonials';
import { type Image } from '@/lib/sanity/sanity-image';
import groq from 'groq';
import { sanityClient } from 'sanity:client';

type ImageSection = Image;

type TextSection = {
  _type: 'textSection';
  text: string;
};

type ImageTextSection = {
  _type: 'imageTextSection';
  text: string;
  image: Image;
  imagePosition: 'left' | 'right';
};

type TestimonialSection = Testimonial;

type ProjectSection = {
  _type: 'textSection' | 'imageTextSection' | 'testimonial' | 'image';
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
  images: Image[];
  tags?: string[];
  githuburl?: string;
  projecturl?: string;
};

function getProjects() {
  const query = groq`
    *[_type == "project"] | order(date desc) { 
      ...,
      "poster": poster { ..., asset-> },
      "images": images[] { ..., asset-> },
      "sections": sections[] {
        _key,
        _type,
        ...select(
          _type == "textSection" => { text },
          _type == "imageTextSection" => {
            text,
            "image": image { ..., asset-> }
          },
          _type == "testimonialSection" => {
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
