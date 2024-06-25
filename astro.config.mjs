import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://CarlosGaubertQ.github.io",
  base: "/portafolio_carlos_astro",
  integrations: [tailwind()],
});

