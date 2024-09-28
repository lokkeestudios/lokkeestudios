import { ComposeIcon } from '@sanity/icons';
import moment from 'moment';
import { type ReactNode } from 'react';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { themeProps } from '../theme';

function CodeDecorator({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        backgroundColor: themeProps['--neutrals-900'],
        fontFamily: 'monospace',
        border: `0.5px solid ${themeProps['--neutrals-600']}`,
        padding: '0.125rem',
        borderRadius: '0.125rem',
      }}
    >
      {children}
    </span>
  );
}

const blogPostSchema = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  icon: ComposeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      options: {
        dateFormat: 'MMMM Do YYYY',
      },
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'poster',
      title: 'Poster',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Primary Heading', value: 'h2' },
            { title: 'Secondary Heading', value: 'h3' },
            { title: 'Tertiary Heading', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code', component: CodeDecorator },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike', value: 'strike-through' },
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
            },
          ],
        }),
        defineArrayMember({
          title: 'Code Block',
          type: 'code',
          options: {
            language: 'typescript',
            languageAlternatives: [
              { title: 'TypeScript', value: 'javascript' },
              { title: 'TSX', value: 'tsx' },
              { title: 'CSS', value: 'css' },
              { title: 'JSON', value: 'json' },
            ],
            withFilename: true,
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'poster',
      date: 'date',
    },
    prepare({ title, media, date }) {
      const subtitle = moment(date).format('MMMM Do YYYY');

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

export { blogPostSchema };
