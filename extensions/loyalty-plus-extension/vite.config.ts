import preact from '@preact/preset-vite'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
import shopify from 'vite-plugin-shopify'

export default defineConfig({
  plugins: [shopify(), preact()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()]
    }
  },
  resolve: {
    alias: {
      '@LoyaltyPlus': '/frontend'
    }
  },
  build: {
    emptyOutDir: false
  }
})
