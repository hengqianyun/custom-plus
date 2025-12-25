<template>
  <button ref="_buttonRef" :class="['cp-button', props.type]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<{
  type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'default' | string
}>(), {
  type: 'default'
})

const _buttonRef = ref<HTMLButtonElement>()

defineExpose({
  ref: _buttonRef
})
</script>

<style scoped lang="postcss">
    .cp-button {
        @apply inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0;

        &.primary {
            @apply bg-primary text-primary-foreground hover:bg-primary/90;
        }

        &.secondary {
            @apply bg-secondary text-secondary-foreground hover:bg-secondary/90;
        }

        &.success {
            @apply bg-success text-success-foreground hover:bg-success/90;
        }

        &.danger {
            @apply bg-danger text-danger-foreground hover:bg-danger/90;
        }

        &.warning {
            @apply bg-warning text-warning-foreground hover:bg-warning/90;
        }

        &.info {
            @apply bg-info text-info-foreground hover:bg-info/90;
        }

        &.default {
            @apply bg-default text-default-foreground hover:bg-default/90;
        }
    }
</style>