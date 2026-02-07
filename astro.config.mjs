import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',                // required for Render static hosting
  base: '/',                       // use '/' for root domain; change to '/learninghub/' if subpath needed
  site: 'https://learninghub-k8mm.onrender.com',  // your Render URL
  vite: {
    build: {
      assetsDir: 'assets'          // helps with hashed CSS/JS paths
    }
  }
});
