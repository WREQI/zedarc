<script setup lang="ts">
import MarketBoardTable from '@/components/MarketBoardTable.vue'
import { getBoardQuotes } from '@/services/market'
</script>

<template><MarketBoardTable title="板块详情" eyebrow="MARKET / SECTOR DETAIL" description="按涨跌幅查看行业板块表现，点击返回可继续浏览全市场行情。" search-placeholder="搜索板块名称或代码" :loader="() => getBoardQuotes('板块')" /></template>
