import { defineConfig } from 'astro/config';
import swup from '@swup/astro';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/postcss';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://lexwu.com/employers',
    }),
    mdx(),
    swup({
      theme: ['fade', { duration: '0.2s'}],
      cache: true,
      preload: {
        visible: true,
      },
      morph: ['header', 'footer'],
      progress: true,
      smoothScrolling: true,
    }),
  ],

  build: {
    format: 'file',
  },

  site: 'https://lexwu.com',

  adapter: cloudflare({
    imageService: 'compile',
    session: false,
  }),

  redirects: {
    '/bio': {
      status: 301,
      destination: 'https://bio.lexwu.com',
    },
    '/listen': {
      status: 301,
      destination: '/discography',
    },
  },

  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss()],}
    }
  },
});