import { CpButton } from '@custom-plus/components/button'
import Components from './components'
import type { App, Plugin } from 'vue'
import 'uno.css'

const Installer = {
  install(app: App) {
    Components.forEach((c: Plugin) => {
      app.use(c)
    })
  }
}

export default Installer
export { CpButton }