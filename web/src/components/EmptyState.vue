<template>
  <div class="state-panel empty-state-common"><span>{{ icon }}</span><strong>{{ title }}</strong><p>{{ message }}</p><slot /></div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ title: string; message?: string; icon?: string }>(), { message: '', icon: '⌕' })
</script>

<style scoped>
.state-panel { display: grid; place-items: center; min-height: 180px; text-align: center; }.empty-state-common { gap: 7px; color: var(--muted); font-size: 11px; }.empty-state-common > span { color: var(--primary); font-size: 28px; }.empty-state-common strong { color: var(--text); font-size: 13px; }.empty-state-common p { font-size: 10px; }
</style>
