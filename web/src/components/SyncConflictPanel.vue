<script setup lang="ts">
import type { ConflictResolution, SyncConflict } from '@/services/offline-sync'

defineProps<{ conflicts: SyncConflict[]; pending?: number }>()
const emit = defineEmits<{ resolve: [id: string, resolution: ConflictResolution] }>()
function display(value: unknown) { return value == null ? '远端未提供版本详情' : typeof value === 'string' ? value : JSON.stringify(value, null, 2) }
function title(conflict: SyncConflict) { return conflict.key.split(':').pop() || conflict.key }
</script>

<template>
  <section v-if="conflicts.length" class="sync-conflicts" aria-label="同步冲突">
    <header><div><strong>需要确认的同步冲突</strong><small>{{ conflicts.length }} 个冲突<span v-if="pending"> · {{ pending }} 个待同步</span></small></div><span class="conflict-count">{{ conflicts.length }}</span></header>
    <article v-for="conflict in conflicts" :key="conflict.id" class="conflict-card">
      <div class="conflict-title"><strong>{{ title(conflict) }}</strong><small>{{ conflict.method }} {{ conflict.url }}</small></div>
      <p>{{ conflict.message }}</p>
      <div class="versions"><div><small>本地版本</small><pre>{{ display(conflict.local) }}</pre></div><div><small>远端版本</small><pre>{{ display(conflict.remote) }}</pre></div></div>
      <div class="conflict-actions"><button @click="emit('resolve', conflict.id, 'local')">保留本地并重试</button><button @click="emit('resolve', conflict.id, 'remote')">使用远端</button><button :disabled="conflict.remote == null || typeof conflict.local !== 'object' || Array.isArray(conflict.local)" @click="emit('resolve', conflict.id, 'merge')">合并后重试</button></div>
    </article>
  </section>
</template>

<style scoped>
.sync-conflicts{margin:12px 0;padding:12px;border:1px solid #f0c8c4;border-radius:7px;background:#fffaf9;color:var(--text);font-size:10px}.sync-conflicts header,.conflict-title,.conflict-actions{display:flex;align-items:center;justify-content:space-between;gap:8px}.sync-conflicts header small,.conflict-title small{display:block;color:var(--muted);font-size:9px}.conflict-count{display:grid;place-items:center;min-width:22px;height:22px;border-radius:50%;background:#fff0ee;color:var(--down);font:11px 'JetBrains Mono',monospace}.conflict-card{margin-top:9px;padding-top:9px;border-top:1px solid #f2deda}.conflict-card p{margin:6px 0;color:var(--down)}.versions{display:grid;grid-template-columns:1fr 1fr;gap:7px}.versions>div{min-width:0;padding:7px;background:var(--card);border:1px solid var(--border);border-radius:4px}.versions small{color:var(--muted)}pre{max-height:60px;margin:5px 0 0;overflow:auto;white-space:pre-wrap;word-break:break-all;color:var(--text);font:9px 'JetBrains Mono',monospace}.conflict-actions{justify-content:flex-start;margin-top:8px}.conflict-actions button{padding:6px 8px;border:1px solid var(--border);border-radius:4px;background:var(--card);color:var(--primary);font-size:9px}.conflict-actions button:disabled{opacity:.45}@media(max-width:520px){.versions{grid-template-columns:1fr}.conflict-actions{flex-wrap:wrap}}
</style>
