<script setup lang="ts">
import MarketBoardTable from '@/components/MarketBoardTable.vue'
import { getBoardQuotes } from '@/services/market'
</script>

<template><MarketBoardTable title="科创专区" eyebrow="MARKET / STAR MARKET" description="聚焦科创板标的，快速查看创新产业与高成长方向表现。" search-placeholder="搜索科创板名称或代码" :loader="() => getBoardQuotes('科创')" /></template>
