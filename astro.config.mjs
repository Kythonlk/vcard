import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://vcardgen.netlify.app',
  integrations: [mdx(), sitemap(), react(), tailwind()],
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }),
});
