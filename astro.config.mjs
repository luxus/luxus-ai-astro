// @ts-check

import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://luxus.ai',
  integrations: [sitemap()],
  adapter: cloudflare(),
  vite: {
    ssr: {
      // WebTUI CSS is imported from node_modules; keep it bundled for SSR.
      noExternal: ['@webtui/css'],
    },
  },
});
