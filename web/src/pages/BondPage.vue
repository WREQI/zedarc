<script setup lang="ts">
import MarketBoardTable from '@/components/MarketBoardTable.vue'
import { getBoardQuotes } from '@/services/market'
</script>

<template><MarketBoardTable title="债券" eyebrow="MARKET / BONDS" description="查看债券类资产的行情概览与流动性信息。" search-placeholder="搜索债券名称或代码" :loader="() => getBoardQuotes('债券')" /></template>
