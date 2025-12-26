/**
 * Element Plus 配置和工具函数
 */
import type { App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

/**
 * 安装 Element Plus
 * @param app Vue 应用实例
 */
export function installElementPlus(app: App) {
  app.use(ElementPlus)
  
  // 注册所有图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

/**
 * Element Plus 配置选项
 */
export interface ElementPlusConfig {
  /** 是否自动导入样式 */
  importStyle?: boolean
  /** 是否注册所有图标 */
  registerIcons?: boolean
}

/**
 * 默认配置
 */
export const defaultElementPlusConfig: ElementPlusConfig = {
  importStyle: true,
  registerIcons: true,
}

