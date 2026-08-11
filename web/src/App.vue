<script setup lang="ts">
import LoadingState from '@/components/LoadingState.vue'
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Suspense>
      <template #default><component :is="Component" /></template>
      <template #fallback><LoadingState label="正在打开页面" /></template>
    </Suspense>
  </RouterView>
</template>
