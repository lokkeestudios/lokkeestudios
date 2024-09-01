import type { Image } from '@/lib/sanity/sanity-image';
import type { TypedObject } from 'astro-portabletext/types';
import groq from 'groq';
import { sanityClient } from 'sanity:client';

interface BlogPost {
  _id: string;
  _type: 'blogPost';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: { _type: 'slug'; current: string };
  date: string;
  poster: Image;
  excerpt: string;
  content: TypedObject;
}

function getBlogPosts() {
  const query = groq`
    *[_type == "blogPost"] | order(date desc) {
      ...,
      "poster": poster { ..., asset-> },
      "content": content[] {
        ...,
        _type == "image" => {
          ...,
          asset->
        }
      }
    }
  `;

  return sanityClient.fetch<BlogPost[]>(query);
}

export { getBlogPosts, type BlogPost };
