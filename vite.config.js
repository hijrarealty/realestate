import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    // ✅ Warn if chunk is over 500kb
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        // ✅ Split into smaller files
        manualChunks: {
          vendor:  ['react', 'react-dom'],
          router:  ['react-router-dom'],
        },
      },
    },

    // ✅ Remove console.log & debugger from production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
      },
    },

    // ✅ Minify CSS
    cssMinify: true,

    // ✅ Inline small files under 4kb
    assetsInlineLimit: 4096,
  },
})