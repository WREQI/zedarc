<template>
  <div class="state-panel loading-state" role="status" aria-live="polite" aria-busy="true">
    <span class="loading-spinner" aria-hidden="true" />
    <strong>{{ label }}</strong>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ label?: string }>(), { label: '加载中…' })
</script>

<style scoped>
.state-panel { display: grid; place-items: center; min-height: 180px; padding: 24px 16px; text-align: center; }
.loading-state { gap: 10px; color: var(--muted); font-size: 11px; }
.loading-spinner { width: 24px; height: 24px; border: 2px solid var(--border); border-top-color: var(--primary); border-radius: 50%; animation: spin .7s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .loading-spinner { animation-duration: 1.4s; } }
</style>
