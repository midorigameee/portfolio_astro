// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig(
  {
    integrations: [tailwind()],
    site: 'https://midorigameee.github.io',
    // base: '/my-repo',
  }, // your configuration options here...
  // https://docs.astro.build/en/reference/configuration-reference/
);
