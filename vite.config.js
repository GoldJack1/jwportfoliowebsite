import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { join } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Plugin to copy service worker to dist folder
    {
      name: 'copy-service-worker',
      closeBundle() {
        try {
          copyFileSync(
            join(__dirname, 'public/sw.js'),
            join(__dirname, 'dist/sw.js')
          );
          console.log('Service worker copied to dist');
        } catch (error) {
          console.warn('Failed to copy service worker:', error);
        }
      },
    },
  ],
  server: {
    host: '0.0.0.0', // Allows external connections for mobile testing
    port: 5173,
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: true,
  },
  build: {
    // Enable code splitting and optimize chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['swiper', 'react-bootstrap', 'bootstrap'],
          'utils-vendor': ['react-helmet-async', 'react-transition-group'],
        },
      },
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging (optional, can disable for smaller builds)
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})
