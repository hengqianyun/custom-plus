import CpTable from './src/index.vue'
import type { Plugin, App } from 'vue'

const CpTableInstall: Plugin = {
  install(app: App) {
    app.component('CpTable', CpTable)
  }
}

export default CpTableInstall

export { CpTable }

