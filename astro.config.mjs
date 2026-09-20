import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jitsu.wales',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
