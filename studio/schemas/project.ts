import { Rule } from 'sanity';

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM YYYY',
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'poster',
      title: 'Poster',
      type: 'image',
      fields: [
        {
          name: 'alttext',
          title: 'Alt text',
          type: 'string',
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'alttext',
              title: 'Alt text',
              type: 'string',
            },
          ],
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'projecturl',
      title: 'Project url',
      type: 'url',
    },
    {
      name: 'githuburl',
      title: 'GitHub url',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'date',
      media: 'poster',
    },
  },
  orderings: [
    {
      title: 'Date, New',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
};
