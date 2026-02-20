import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://tompere.github.io",
  base: "/yasmin-peres-scm-consultant",
  integrations: [tailwind(), sitemap()],
  output: "static",
});
