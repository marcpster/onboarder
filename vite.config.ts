import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    // Base path used in index.html
    base: '/onboarder',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode)
    },
    plugins: [
      react()
    ],
    build: {
      minify: true,
      cssMinify: true,
      lib: {
        entry: path.resolve(__dirname, 'src/main.tsx'),
        name: 'onboarder',
        formats: ['es'],
        fileName: (format) => `onboarder.${format}.js`
      },
      rollupOptions: {
        input: {
          app: './index.html'
        }
      }
    }
  }
})
