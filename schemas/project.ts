import { CaseIcon } from '@sanity/icons';
import moment from 'moment';
import { defineArrayMember, defineField, defineType } from 'sanity';

const projectSchema = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM YYYY',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'poster',
      title: 'Poster',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          description: 'Crucial for SEO and accessiblity',
          type: 'string',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alternative text',
              description: 'Crucial for SEO and accessiblity',
              type: 'string',
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'projecturl',
      title: 'Project url',
      type: 'url',
    }),
    defineField({
      name: 'githuburl',
      title: 'GitHub url',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'poster',
      date: 'date',
    },
    prepare({ title, media, date }) {
      const subtitle = moment(date).format('MMMM YYYY');

      return {
        title,
        subtitle,
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Date, New',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
});

export { projectSchema };
