import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import UnoCSS from 'unocss/vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './main.ts',
      name: 'ui',
      fileName: (format) => `ui.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'element-plus'],
    },
    cssCodeSplit: true,
  },
  plugins: [
    vue(), 
    UnoCSS(), 
    dts({
      outDir: 'dist',
      rollupTypes: false,
      copyDtsFiles: true
    })
  ],
})
