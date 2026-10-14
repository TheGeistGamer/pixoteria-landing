// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://pixoteria.infinitydev.agency',

  // CSS de la página inline en el HTML: evita una petición que bloquea el render
  build: {
    inlineStylesheets: 'always'
  },

  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});