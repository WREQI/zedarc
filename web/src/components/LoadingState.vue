<template>
  <div class="state-panel loading-state" role="status" aria-live="polite"><span class="loading-spinner" /><strong>{{ label }}</strong></div>
</template>

<script setup lang="ts">
defineProps<{ label?: string }>()
</script>

<style scoped>
.state-panel { display: grid; place-items: center; min-height: 180px; text-align: center; }.loading-state { gap: 10px; color: var(--muted); font-size: 11px; }.loading-spinner { width: 22px; height: 22px; border: 2px solid var(--border); border-top-color: var(--primary); border-radius: 50%; animation: spin .7s linear infinite; }@keyframes spin { to { transform: rotate(360deg); } }
</style>
