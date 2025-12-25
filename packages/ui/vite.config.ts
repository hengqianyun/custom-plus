import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import UnoCSS from 'unocss/vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './main.ts',
      name: 'custom-plus-ui',
      fileName: (format) => `custom-plus-ui.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      },
    }
  },
  plugins: [vue(), UnoCSS(), dts()],
})
