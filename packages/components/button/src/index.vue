<template>
  <el-button ref="_buttonRef" :type="props.type">
    <slot></slot>
  </el-button>
</template>

<script setup lang="ts">
import type { ButtonType } from 'element-plus';
import { ElButton } from 'element-plus';
import { ref } from 'vue';

interface Props {
  type: ButtonType
}

const props = withDefaults(defineProps<Props>(), {
  type: 'default'
})

const _buttonRef = ref<InstanceType<typeof ElButton>>()

defineExpose({
  ref: _buttonRef
})
</script>

<style scoped lang="scss">
</style>
