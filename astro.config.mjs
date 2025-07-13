import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import pagefind from 'astro-pagefind';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://lexwu.com',
  experimental: {},
  integrations: [tailwind(), compress(), pagefind(), mdx(), sitemap()],

  build: {
    format: "file",
  },

  redirects: {
    "/work/[id]": "/projects/[id]",
    "/work/curtain-lorimer/[id]": "/projects/[id]",
    "/blog": "https://blog.lexwu.com",
    "/bio": "https://bio.lexwu.com",
  },

  adapter: cloudflare()
});