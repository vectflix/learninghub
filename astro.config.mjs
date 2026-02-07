import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static', // must be static for Render static hosting
  base: '/', // try '/' first; change to '/learninghub/' if subpath issues persist
  vite: {
    // Helps with asset paths in some cases
    build: {
      assetsDir: 'assets'
    }
  }
});
