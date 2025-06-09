import { CaseIcon, DashboardIcon, ImageIcon, TextIcon } from '@sanity/icons';
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
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Image',
          type: 'image',
          icon: ImageIcon,
          fields: [
            {
              name: 'alt',
              title: 'Alternative text',
              description: 'Crucial for SEO and accessiblity',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              media: 'asset',
              title: 'alt',
            },
            prepare({ media, title }) {
              return {
                title: title ?? 'Image',
                media: media,
              };
            },
          },
        }),
        defineArrayMember({
          title: 'Text',
          name: 'textblock',
          type: 'object',
          icon: TextIcon,
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              text: 'text',
            },
            prepare({ text }) {
              return {
                title: text ?? 'Text section',
                subtitle: 'Text content',
              };
            },
          },
          validation: (Rule) => Rule.required(),
        }),
        defineArrayMember({
          title: 'Image with Text',
          name: 'imageWithText',
          type: 'object',
          icon: DashboardIcon,
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              fields: [
                {
                  name: 'alt',
                  title: 'Alternative text',
                  description: 'Crucial for SEO and accessiblity',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
            {
              name: 'text',
              title: 'Text',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'imagePosition',
              title: 'Image Position',
              type: 'string',
              options: {
                list: ['left', 'right'],
              },
              initialValue: 'left',
            },
          ],
          preview: {
            select: {
              media: 'image',
              text: 'text',
            },
            prepare({ media, text }) {
              return {
                title: text ?? 'Image with Text',
                subtitle: 'Image with text',
                media: media,
              };
            },
          },
        }),
        defineArrayMember({
          title: 'Testimonial',
          name: 'testimonial',
          type: 'reference',
          to: [{ type: 'testimonial' }],
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
