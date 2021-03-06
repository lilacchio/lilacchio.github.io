import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), react(), tailwind(), sitemap()]
});

{
  site: 'https://lilacchio.github.io'
}
