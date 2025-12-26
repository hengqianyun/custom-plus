/// <reference types="vite/client" />
declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
  }

declare module 'custom-plus' {
  import type { App } from 'vue'
  const Installer: {
    install(app: App): void
  }
  export default Installer
  export { CpButton } from '@custom-plus/components/button'
}

declare module 'custom-plus/dist/main.css'
  