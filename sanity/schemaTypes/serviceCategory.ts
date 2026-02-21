import { defineField, defineType } from "sanity";

export const serviceCategory = defineType({
  name: "serviceCategory",
  title: "קטגוריית שירות",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "שם קטגוריה (עברית)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "categoryEn",
      title: "Category Name (English)",
      type: "string",
    }),
    defineField({
      name: "items",
      title: "שירותים",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.required().min(1),
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
    select: { title: "category", subtitle: "categoryEn" },
  },
});
