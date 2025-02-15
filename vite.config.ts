import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      external: ['emailjs-com'], // Remove if you switch to @emailjs/browser
    },
  },
  server: {
    port: 3000, // Optional: Change the port if needed
    open: true, // Opens browser on server start
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: Helps with cleaner imports
    },
  },
});