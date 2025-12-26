<template>
  <el-table
    :data="props.data"
    :stripe="props.stripe"
    :border="props.border"
    :size="props.size"
    :style="props.style"
    v-bind="$attrs"
  >
    <slot></slot>
  </el-table>
</template>

<script setup lang="ts">
interface Props {
  data: any[]
  stripe?: boolean
  border?: boolean
  size?: 'large' | 'default' | 'small'
  style?: string | Record<string, any>
}

const props = withDefaults(defineProps<Props>(), {
  stripe: false,
  border: false,
  size: 'default',
  style: undefined,
})
</script>

<style scoped>
/* 可以添加自定义样式 */
</style>

