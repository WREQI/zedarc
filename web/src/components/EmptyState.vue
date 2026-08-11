<template>
  <div class="state-panel empty-state-common" role="status" aria-live="polite">
    <span aria-hidden="true">{{ icon }}</span>
    <strong>{{ title }}</strong>
    <p v-if="message">{{ message }}</p>
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ title: string; message?: string; icon?: string }>(), { message: '', icon: '⌕' })
</script>

<style scoped>
.state-panel { display: grid; place-items: center; min-height: 180px; padding: 24px 16px; text-align: center; }
.empty-state-common { gap: 7px; color: var(--muted); font-size: 11px; }
.empty-state-common > span { color: var(--primary); font-size: 28px; line-height: 1; }
.empty-state-common strong { color: var(--text); font-size: 13px; }
.empty-state-common p { max-width: 34em; font-size: 10px; line-height: 1.6; }
</style>
