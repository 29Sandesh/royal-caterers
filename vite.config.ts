import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/royal-caterers/' : './',
  plugins: [react()],
  server: {
    port: 2912,
    strictPort: true,
    host: true,
  },
  preview: {
    port: 2912,
    strictPort: true,
    host: true,
  },
});
