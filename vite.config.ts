import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/todo-localstore/',
  test: {
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    globals: true,
  }
});
