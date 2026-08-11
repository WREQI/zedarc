<template>
  <RouterLink class="quote-row-common" :class="{ 'has-volume': showVolume }" :to="to || `/stock/${stock.code}`">
    <button v-if="editable" type="button" class="quote-check" :class="{ checked: selected }" :aria-label="`选择${stock.name}`" @click.prevent.stop="$emit('toggle')">{{ selected ? '✓' : '' }}</button>
    <span class="quote-name-common"><i>{{ String(index + 1).padStart(2, '0') }}</i><strong>{{ stock.name }}</strong><small>{{ stock.code }}</small></span>
    <span class="quote-price-common mono">{{ stock.price }}</span>
    <span class="quote-change-common mono" :class="stock.trend === 'up' ? 'text-up' : 'text-down'"><b>{{ stock.percent }}</b><small>{{ stock.change }}</small></span>
    <span v-if="showVolume" class="quote-volume-common mono">{{ stock.volume }}</span><span class="quote-arrow-common">›</span>
  </RouterLink>
</template>

<script setup lang="ts">
import type { StockQuote } from '@/services/market-types'
defineProps<{ stock: StockQuote; index: number; to?: string; editable?: boolean; selected?: boolean; showVolume?: boolean }>()
defineEmits<{ toggle: [] }>()
</script>

<style scoped>
.quote-row-common { display:grid; grid-template-columns:minmax(130px,1.6fr) .8fr .8fr 20px; gap:8px; align-items:center; min-height:62px; color:inherit; text-decoration:none; border-bottom:1px solid var(--border); font-size:11px; }.quote-row-common.has-volume { grid-template-columns:minmax(130px,1.6fr) .8fr .8fr .8fr 20px; }.quote-name-common { display:grid; grid-template-columns:25px 1fr; min-width:0; }.quote-name-common i { grid-row:span 2; color:#b3bac7; font:normal 9px 'JetBrains Mono',monospace; }.quote-name-common strong,.quote-name-common small { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }.quote-name-common strong { font-size:12px; }.quote-name-common small,.quote-change-common small { color:var(--muted); font:9px 'JetBrains Mono',monospace; margin-top:4px; }.quote-price-common,.quote-change-common,.quote-volume-common { text-align:right; }.quote-change-common b,.quote-change-common small { display:block; }.quote-arrow-common { color:#b4bdca; font-size:18px; text-align:right; }.quote-check { position:absolute; width:18px; height:18px; margin-left:-25px; border:1px solid #cfd7e4; border-radius:50%; background:var(--card); color:#fff; font-size:11px; }.quote-check.checked { border-color:var(--primary); background:var(--primary); }
@media (max-width:620px) { .quote-row-common,.quote-row-common.has-volume { grid-template-columns:minmax(105px,1.5fr) .78fr .78fr 18px; gap:5px; min-height:60px; }.quote-volume-common { display:none; } }
</style>
