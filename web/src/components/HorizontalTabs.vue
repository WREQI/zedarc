<template>
  <nav class="horizontal-tabs" :aria-label="ariaLabel" role="tablist">
    <el-radio-group class="tabs-group" :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)">
      <el-radio-button v-for="item in items" :key="item.value" :label="item.value">
        {{ item.label }}<span v-if="item.count !== undefined">{{ item.count }}</span>
      </el-radio-button>
    </el-radio-group>
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
.horizontal-tabs::-webkit-scrollbar { display:none; }
.tabs-group { display:flex; flex:0 0 auto; }
.tabs-group :deep(.el-radio-button__inner) { padding:11px 10px 10px; color:var(--muted); border:0; border-radius:0; background:transparent; box-shadow:none; font-size:12px; }
.tabs-group :deep(.el-radio-button:first-child .el-radio-button__inner) { padding-left:2px; }
.tabs-group :deep(.el-radio-button.is-active .el-radio-button__inner) { color:var(--primary); font-weight:600; background:transparent; box-shadow:inset 0 -2px 0 var(--primary); }
.tabs-group span { margin-left:4px; color:var(--primary); font:10px 'JetBrains Mono',monospace; }
@media (max-width:560px) { .horizontal-tabs { gap:14px; } .tabs-group :deep(.el-radio-button__inner) { padding-top:10px; padding-bottom:9px; } }
</style>
