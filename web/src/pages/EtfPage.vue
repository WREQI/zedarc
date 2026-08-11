<script setup lang="ts">
import MarketBoardTable from '@/components/MarketBoardTable.vue'
import { getBoardQuotes } from '@/services/market'
</script>

<template><MarketBoardTable title="ETF体系" eyebrow="MARKET / ETF" description="覆盖宽基、行业与主题基金，快速筛选今日活跃 ETF。" search-placeholder="搜索 ETF 名称或代码" :loader="() => getBoardQuotes('ETF')" /></template>
