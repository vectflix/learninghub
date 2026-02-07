// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Right now static — later we change to 'server' or 'hybrid' when adding Supabase backend
  output: 'static',
  
  // Optional: site URL for better previews (update with your Vercel URL later)
  // site: 'https://your-app-name.vercel.app',
});
