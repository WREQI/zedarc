<script setup lang="ts">
import MarketBoardTable from '@/components/MarketBoardTable.vue'
import { getBoardQuotes } from '@/services/market'
</script>

<template><MarketBoardTable title="板块行情" eyebrow="MARKET / SECTORS" description="实时观察行业板块强弱、涨跌幅与代表性标的。" search-placeholder="搜索板块名称或代码" :loader="() => getBoardQuotes('板块')" /></template>
