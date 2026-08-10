<template>
  <RouterView v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
      <template #fallback><div class="route-loading">正在打开页面…</div></template>
    </Suspense>
  </RouterView>
</template>
