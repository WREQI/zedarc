<template>
  <footer class="bottom-action-bar bottom-bar" :class="{ elevated, fixed }">
    <slot name="before" />
    <el-button v-if="primaryLabel" type="danger" class="action-primary buy-action" @click="$emit('primary')"><strong>{{ primaryLabel }}</strong><small v-if="primaryMeta">{{ primaryMeta }}</small></el-button>
    <el-button v-if="secondaryLabel" type="success" class="action-secondary sell-action" @click="$emit('secondary')"><strong>{{ secondaryLabel }}</strong><small v-if="secondaryMeta">{{ secondaryMeta }}</small></el-button>
    <el-button v-if="tertiaryLabel" class="action-tertiary favorite-action trade-button" @click="$emit('tertiary')"><strong>{{ tertiaryLabel }}</strong><small v-if="tertiaryMeta">{{ tertiaryMeta }}</small></el-button>
    <slot />
  </footer>
</template>

<script setup lang="ts">
defineProps<{ primaryLabel?: string; primaryMeta?: string; secondaryLabel?: string; secondaryMeta?: string; tertiaryLabel?: string; tertiaryMeta?: string; elevated?: boolean; fixed?: boolean }>()
defineEmits<{ primary: []; secondary: []; tertiary: [] }>()
</script>

<style scoped>
.bottom-action-bar { display:flex; gap:6px; padding:8px 8px calc(8px + env(safe-area-inset-bottom, 0px)); background:var(--card); }.bottom-action-bar.elevated { position:sticky; bottom:0; z-index:5; padding-right:12px; padding-left:12px; border-top:1px solid var(--border); box-shadow:0 -5px 18px rgba(30,54,85,.08); }.bottom-action-bar.fixed { position:fixed; right:0; bottom:0; left:0; z-index:20; }.bottom-action-bar :deep(.el-button) { display:flex; min-height:40px; height:auto; flex:1; flex-direction:column; align-items:center; justify-content:center; gap:3px; margin:0; border-radius:5px; font-size:12px; }.bottom-action-bar strong { font-weight:600; }.bottom-action-bar small { font:10px 'JetBrains Mono',monospace; opacity:.78; }.action-tertiary { color:var(--primary); border-color:var(--border); background:var(--card); }
@media (max-width:820px){.bottom-action-bar.fixed{bottom:calc(68px + env(safe-area-inset-bottom, 0px));z-index:50}}
@media (min-width:821px){.bottom-action-bar.fixed{right:auto;left:calc(50% + 89px);width:min(660px,calc(100vw - 48px));transform:translateX(-50%);border:1px solid var(--border);border-radius:6px 6px 0 0;box-shadow:0 -4px 18px rgba(38,46,64,.12)}}
</style>
