import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';


export default defineConfig({
  site:'https://adan0930.github.io/AS-Software/',
  base: '/AS-Software',
  build: {
    outDir: './dist'
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en'],
    routing:{
      prefixDefaultLocale: false,
    }
  },

  output: 'static',
  integrations: [tailwind(), react()],
});
