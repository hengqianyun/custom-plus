import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  
  return {
    plugins: [vue()],
    resolve: {
      alias: isDev
        ? {
            // 开发模式下直接使用源码，实现热更新
            'custom-plus': path.resolve(__dirname, '../../packages/ui/main.ts'),
            '@custom-plus/components': path.resolve(__dirname, '../../packages/components'),
          }
        : undefined,
    },
    optimizeDeps: {
      exclude: isDev ? ['custom-plus', '@custom-plus/components'] : [],
    },
    server: {
      watch: {
        // 监听 packages 目录的变化
        ignored: ['!**/packages/**'],
      },
    },
  }
})
