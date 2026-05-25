import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  // No base needed — Capacitor loads from local filesystem
});
