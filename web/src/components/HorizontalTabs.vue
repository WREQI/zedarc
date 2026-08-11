<template>
  <nav class="horizontal-tabs" :aria-label="ariaLabel" role="tablist">
    <button v-for="item in items" :key="item.value" type="button" role="tab" :aria-selected="modelValue === item.value" :class="{ active: modelValue === item.value }" @click="$emit('update:modelValue', item.value)">
      {{ item.label }}<span v-if="item.count !== undefined">{{ item.count }}</span>
    </button>
    <slot />
  </nav>
</template>

<script setup lang="ts">
export type TabItem = { label: string; value: string; count?: number }
defineProps<{ items: TabItem[]; modelValue: string; ariaLabel?: string }>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<style scoped>
.horizontal-tabs { display:flex; align-items:center; gap:20px; min-width:0; overflow-x:auto; border-bottom:1px solid var(--border); scrollbar-width:none; }
.horizontal-tabs::-webkit-scrollbar { display:none; }.horizontal-tabs button { position:relative; flex:0 0 auto; padding:11px 2px 10px; border:0; background:transparent; color:var(--muted); font-size:12px; white-space:nowrap; }.horizontal-tabs button.active { color:var(--text); font-weight:600; }.horizontal-tabs button.active::after { position:absolute; right:0; bottom:-1px; left:0; height:2px; border-radius:2px; background:var(--primary); content:''; }.horizontal-tabs button span { margin-left:4px; color:var(--primary); font:10px 'JetBrains Mono',monospace; }
@media (max-width:560px) { .horizontal-tabs { gap:14px; } .horizontal-tabs button { padding-top:10px; padding-bottom:9px; } }
</style>
