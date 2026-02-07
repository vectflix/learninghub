import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  base: '/learninghub/',  // Matches your repo name – trailing slash required
  site: 'https://vectflix.github.io/learninghub/'
});
