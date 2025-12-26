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

<style scoped>
    .cp-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.375rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 500;
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 0.15s;
        padding: 0.5rem 1rem;
        border: none;
        cursor: pointer;
    }

    .cp-button:focus-visible {
        outline: 2px solid transparent;
        outline-offset: 2px;
        box-shadow: 0 0 0 1px rgb(59 130 246);
    }

    .cp-button:disabled {
        pointer-events: none;
        opacity: 0.5;
    }

    .cp-button svg {
        pointer-events: none;
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
    }

    .cp-button.primary {
        background-color: rgb(59 130 246);
        color: rgb(255 255 255);
    }

    .cp-button.primary:hover {
        background-color: rgb(59 130 246 / 0.9);
    }

    .cp-button.secondary {
        background-color: rgb(107 114 128);
        color: rgb(255 255 255);
    }

    .cp-button.secondary:hover {
        background-color: rgb(107 114 128 / 0.9);
    }

    .cp-button.success {
        background-color: rgb(16 185 129);
        color: rgb(255 255 255);
    }

    .cp-button.success:hover {
        background-color: rgb(16 185 129 / 0.9);
    }

    .cp-button.danger {
        background-color: rgb(239 68 68);
        color: rgb(255 255 255);
    }

    .cp-button.danger:hover {
        background-color: rgb(239 68 68 / 0.9);
    }

    .cp-button.warning {
        background-color: rgb(245 158 11);
        color: rgb(255 255 255);
    }

    .cp-button.warning:hover {
        background-color: rgb(245 158 11 / 0.9);
    }

    .cp-button.info {
        background-color: rgb(6 182 212);
        color: rgb(255 255 255);
    }

    .cp-button.info:hover {
        background-color: rgb(6 182 212 / 0.9);
    }

    .cp-button.default {
        background-color: rgb(107 114 128);
        color: rgb(255 255 255);
    }

    .cp-button.default:hover {
        background-color: rgb(107 114 128 / 0.9);
    }
</style>