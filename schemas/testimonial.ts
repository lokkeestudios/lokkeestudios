import { UsersIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

const testimonialSchema = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'avatar',
      title: 'User Avatar',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          description: 'Crucial for SEO and accessiblity',
          type: 'localeString',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          description: 'Crucial for SEO and accessiblity',
          type: 'localeString',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title.en',
      media: 'avatar',
    },
    prepare({ title, subtitle, media }) {
      return { title, subtitle, media };
    },
  },
});

export { testimonialSchema };
