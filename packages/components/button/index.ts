import CpButton from './src/index.vue';
import type { Plugin, App } from 'vue';

const CpButtonInstall: Plugin = {
    install(app: App) {
        app.component('CpButton', CpButton)
    }
}

export default CpButtonInstall

export { CpButton }