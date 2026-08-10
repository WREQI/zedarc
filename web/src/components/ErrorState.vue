<template>
  <div class="state-panel error-state" role="alert"><span>!</span><strong>{{ title }}</strong><p>{{ message }}</p><button v-if="retry" class="secondary-button" @click="retry">重新加载</button></div>
</template>

<script setup lang="ts">
defineProps<{ title?: string; message?: string; retry?: () => void }>()
</script>

<style scoped>
.state-panel { display: grid; place-items: center; min-height: 180px; text-align: center; }.error-state { gap: 7px; color: var(--muted); font-size: 11px; }.error-state > span { display: grid; place-items: center; width: 28px; height: 28px; color: #fff; background: var(--up); border-radius: 50%; font-weight: 700; }.error-state strong { color: var(--text); font-size: 13px; }.error-state p { font-size: 10px; }.error-state button { margin-top: 8px; }
</style>
