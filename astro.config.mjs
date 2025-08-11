import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static', // ⬅ إجبار Astro على البناء كـ Static Site
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'ar',
        locales: {
          ar: 'ar-SA',
          en: 'en-US'
        }
      }
    })
  ],
  site: 'https://fuad3ziz.com',
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en']
  },
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true,
  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom']
          }
        }
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom']
    },
    server: {
      hmr: {
        overlay: false
      }
    }
  }
});
