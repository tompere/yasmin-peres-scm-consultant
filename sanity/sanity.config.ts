import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "yasmin-peres",
  title: "יסמין פרס - ניהול תוכן",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "wlda98ep",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
