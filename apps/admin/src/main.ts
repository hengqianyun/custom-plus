import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import CustomPlus from 'custom-plus'
import "custom-plus/dist/main.css"

createApp(App).use(CustomPlus).mount('#app')
