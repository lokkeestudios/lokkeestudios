export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      options: {
        dateFormat: "MMMM YYYY",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alttext",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "projecturl",
      title: "Project Url",
      type: "url",
    },
    {
      name: "githuburl",
      title: "GitHub Url",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "date",
      media: "images.0",
    },
  },
};
