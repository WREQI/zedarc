<template>
  <el-result class="state-panel error-state" icon="error" :title="title" :sub-title="message" role="alert">
    <template v-if="retry" #extra><el-button type="primary" @click="retry">重新加载</el-button></template>
  </el-result>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ title?: string; message?: string; retry?: () => void }>(), {
  title: '加载失败',
  message: '暂时无法获取数据，请稍后重试。',
})
</script>

<style scoped>
.state-panel { min-height: 180px; padding: 24px 16px; }
.error-state :deep(.el-result__title p) { color: var(--text); font-size: 13px; }
.error-state :deep(.el-result__subtitle p) { color: var(--muted); font-size: 11px; }
</style>
