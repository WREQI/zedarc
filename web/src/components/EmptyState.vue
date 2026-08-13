<template>
  <el-empty class="state-panel empty-state-common" :description="message || title" :image-size="80">
    <template #description><strong>{{ title }}</strong><p v-if="message">{{ message }}</p></template>
    <slot />
  </el-empty>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ title: string; message?: string; icon?: string }>(), { message: '', icon: '⌕' })
</script>

<style scoped>
.state-panel { min-height: 180px; padding: 24px 16px; }
.empty-state-common :deep(.el-empty__description) { display: grid; gap: 7px; color: var(--muted); font-size: 11px; }
.empty-state-common strong { color: var(--text); font-size: 13px; }
.empty-state-common p { max-width: 34em; margin: 0; font-size: 10px; line-height: 1.6; }
</style>
