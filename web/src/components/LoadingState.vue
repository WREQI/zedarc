<template>
  <div class="state-panel loading-state" role="status" aria-live="polite" aria-busy="true">
    <el-skeleton :rows="3" animated />
    <span>{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ label?: string }>(), { label: '加载中…' })
</script>

<style scoped>
.state-panel { min-height: 180px; padding: 24px 16px; text-align: center; }
.loading-state { display: grid; gap: 14px; color: var(--muted); font-size: 11px; }
.loading-state :deep(.el-skeleton) { max-width: 380px; width: 100%; margin: auto; }
</style>
