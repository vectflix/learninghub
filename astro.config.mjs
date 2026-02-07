// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',                // MUST be static for GitHub Pages
  base: '/learninghub/',           // Your repo name – include trailing slash
  site: 'https://vectflix.github.io/learninghub/',  // optional but good
});
