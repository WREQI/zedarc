<script setup lang="ts">
withDefaults(defineProps<{
  periods: readonly string[]
  activePeriod: string
  indicators: readonly string[]
  activeIndicator: string
  adjustment: string
  adjustmentOptions?: readonly string[]
  showAdjustment?: boolean
}>(), {
  adjustmentOptions: () => ['前复权', '后复权', '不复权'],
  showAdjustment: false,
})

const emit = defineEmits<{
  'select-period': [value: string]
  'select-indicator': [value: string]
  'update:adjustment': [value: string]
  'toggle-adjustment': []
  'open-settings': []
}>()
</script>

<template>
  <div class="kline-toolbar">
    <nav class="period-tabs" aria-label="K线周期">
      <button v-for="period in periods" :key="period" type="button" :class="{ selected: activePeriod === period }" @click="emit('select-period', period)">{{ period }}</button>
      <button type="button" class="toolbar-icon" aria-label="K线设置" @click="emit('open-settings')">⚙</button>
    </nav>
    <div class="indicator-tabs" aria-label="技术指标">
      <button v-for="item in indicators" :key="item" type="button" :class="{ selected: activeIndicator === item }" @click="emit('select-indicator', item)">{{ item }}</button>
      <div class="adjustment-control">
        <button type="button" class="adjustment-button" :aria-expanded="showAdjustment" @click="emit('toggle-adjustment')">{{ adjustment }}⌄</button>
        <div v-if="showAdjustment" class="adjustment-menu" role="menu">
          <button v-for="item in adjustmentOptions" :key="item" type="button" role="menuitem" @click="emit('update:adjustment', item)">{{ item }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.kline-toolbar{background:#fff}.period-tabs,.indicator-tabs{display:flex;overflow:auto;align-items:center;border-bottom:1px solid #f0f1f4;scrollbar-width:none}.period-tabs::-webkit-scrollbar,.indicator-tabs::-webkit-scrollbar{display:none}.period-tabs button,.indicator-tabs button{padding:11px 13px;border:0;background:transparent;color:#8c96a5;font-size:12px;white-space:nowrap}.period-tabs button.selected,.indicator-tabs button.selected{color:#256fdc;font-weight:600}.toolbar-icon{margin-left:auto!important;font-size:17px!important}.indicator-tabs{border-bottom:0}.adjustment-control{position:relative;margin-left:auto}.adjustment-button{margin-left:0!important}.adjustment-menu{position:absolute;right:0;z-index:3;padding:4px;background:#fff;border:1px solid #e5e8ee;box-shadow:0 5px 16px #2630401a}.adjustment-menu button{display:block;width:76px;padding:8px;border:0;background:#fff;color:#667184;font-size:11px}
@media (max-width:560px){.period-tabs,.indicator-tabs{overscroll-behavior-x:contain}.period-tabs button,.indicator-tabs button{padding-left:11px;padding-right:11px}}
</style>
