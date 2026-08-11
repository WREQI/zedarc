<template>
  <div class="data-state" :class="`data-state-${status}`">
    <LoadingState v-if="status === 'loading'" :label="loadingLabel" />
    <ErrorState v-else-if="status === 'error'" :title="errorTitle" :message="message" :retry="retry" />
    <EmptyState v-else-if="status === 'empty'" :title="emptyTitle" :message="message" :icon="emptyIcon" />
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
import EmptyState from './EmptyState.vue'
import ErrorState from './ErrorState.vue'
import LoadingState from './LoadingState.vue'

withDefaults(defineProps<{ status: 'loading' | 'error' | 'empty' | 'ready'; loadingLabel?: string; errorTitle?: string; emptyTitle?: string; emptyIcon?: string; message?: string; retry?: () => void }>(), { loadingLabel: '加载中…', errorTitle: '加载失败', emptyTitle: '暂无数据', emptyIcon: '⌕' })
</script>
