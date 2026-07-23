// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://brycecampbell.com',
  integrations: [mdx()],
  markdown: {
    shikiConfig: { theme: 'github-dark-default' },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
