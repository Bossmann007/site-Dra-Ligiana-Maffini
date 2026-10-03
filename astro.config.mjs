// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import { isIndexableUrl } from './src/data/indexing.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.draligianamaffini.com.br',
  trailingSlash: 'always',
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      filter: (page) => isIndexableUrl(page),
    }),
  ],
});