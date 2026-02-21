import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "שאלה נפוצה",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "שאלה",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      title: "תשובה",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "סדר תצוגה",
      type: "number",
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: "סדר תצוגה",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "question" },
  },
});
