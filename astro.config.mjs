import { defineConfig } from 'astro/config';
import image from "@astrojs/image";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:3000/',
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap()]
});