import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import CustomPlus from 'custom-plus'
// 样式导入：开发模式下通过 main.ts 中的 uno.css 自动处理
// 生产模式下使用构建后的 CSS（如果需要，可以取消注释下面这行）
// import "custom-plus/dist/main.css"

createApp(App).use(CustomPlus).mount('#app')
