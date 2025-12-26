import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: '#3b82f6',
      'primary-foreground': '#ffffff',
      secondary: '#6b7280',
      'secondary-foreground': '#ffffff',
      success: '#10b981',
      'success-foreground': '#ffffff',
      danger: '#ef4444',
      'danger-foreground': '#ffffff',
      warning: '#f59e0b',
      'warning-foreground': '#ffffff',
      info: '#06b6d4',
      'info-foreground': '#ffffff',
      default: '#6b7280',
      'default-foreground': '#ffffff',
      ring: '#3b82f6',
    }
  },
  // 支持 @apply 指令
  transformers: [],
})

