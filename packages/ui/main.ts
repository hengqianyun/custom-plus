import { CpButton } from '@custom-plus/components/button'
import { CpTable } from '@custom-plus/components/table'
import { installElementPlus } from '@custom-plus/components/element-plus'
import Components from './components'
import type { App, Plugin } from 'vue'
import 'uno.css'

const Installer = {
  install(app: App) {
    // 安装 Element Plus
    installElementPlus(app)
    
    // 安装自定义组件
    Components.forEach((c: Plugin) => {
      app.use(c)
    })
  }
}

export default Installer
export { CpButton, CpTable }