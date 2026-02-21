import { defineField, defineType } from "sanity";

export const about = defineType({
  name: "about",
  title: "אודות",
  type: "document",
  fields: [
    defineField({
      name: "bio",
      title: "ביוגרפיה",
      type: "array",
      of: [{ type: "block" }],
      description: "טקסט עשיר עם אפשרויות עיצוב",
    }),
    defineField({
      name: "caseStudy",
      title: "דוגמת פרויקט",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "כותרת",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "תיאור",
          type: "text",
        }),
        defineField({
          name: "metrics",
          title: "מדדים",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "value", title: "ערך", type: "string" }),
                defineField({ name: "label", title: "תווית", type: "string" }),
              ],
              preview: {
                select: { title: "value", subtitle: "label" },
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "badges",
      title: "תגים",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "תווית", type: "string" }),
          ],
          preview: {
            select: { title: "label" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "אודות יסמין פרס" };
    },
  },
});
