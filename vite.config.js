import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows external connections for mobile testing
    port: 5173,
    allowedHosts: [
      'all',
      'devserver-main--jackwingateportfolio.netlify.app'
    ]
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
