import { defineField, defineType } from 'sanity';

/**
 * Reusable object type for field-level localization (en/de).
 * English is required; German is optional and falls back to English in GROQ.
 * In GROQ, select the value for a locale with: coalesce(field[$locale], field.en)
 */
export const localeStringType = defineType({
  name: 'localeString',
  title: 'Localized string',
  type: 'object',
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: 'en',
      title: 'English',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    { name: 'de', title: 'Deutsch', type: 'string' },
  ],
});
