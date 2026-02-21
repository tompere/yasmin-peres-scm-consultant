import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "wlda98ep",
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
  },
});
