/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  server: {
    host: true,
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setupTests.ts',
    coverage: {
      enabled: true,
      provider: 'c8',
      all: true,
    },
  },
});
