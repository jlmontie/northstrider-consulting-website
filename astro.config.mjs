import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://northstriderconsulting.com',
  // Marketing pages stay statically prerendered. The /api/contact route opts out
  // via `export const prerender = false` and is rendered on demand by the Node adapter.
  // Swap this adapter for @astrojs/vercel, @astrojs/netlify, or @astrojs/cloudflare without
  // touching the route code.
  adapter: node({ mode: 'standalone' }),
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
