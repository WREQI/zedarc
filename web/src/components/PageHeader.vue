<template>
  <header class="page-header">
    <div class="page-header-copy">
      <p v-if="eyebrow" class="page-header-eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p v-if="description" class="page-header-description">{{ description }}</p>
    </div>
    <div v-if="$slots.actions" class="page-header-actions"><slot name="actions" /></div>
  </header>
</template>

<script setup lang="ts">
defineProps<{ eyebrow?: string; title: string; description?: string }>()
</script>

<style scoped>
.page-header { display:flex; align-items:flex-start; justify-content:space-between; gap:16px; padding:2px 2px 16px; }
.page-header-copy { min-width:0; }.page-header-eyebrow { margin:0 0 5px; color:var(--primary); font:10px 'JetBrains Mono',monospace; letter-spacing:.12em; }
.page-header h1 { font-size:23px; line-height:1.15; }.page-header-description { margin-top:7px; color:var(--muted); font-size:11px; line-height:1.55; }.page-header-actions { display:flex; align-items:center; gap:8px; flex:none; }
@media (max-width:560px) { .page-header { padding-bottom:12px; }.page-header h1 { font-size:21px; }.page-header-description { max-width:240px; } }
</style>
