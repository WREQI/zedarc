<template>
  <div class="state-panel error-state" role="alert">
    <span aria-hidden="true">!</span>
    <strong>{{ title }}</strong>
    <p v-if="message">{{ message }}</p>
    <button v-if="retry" type="button" class="secondary-button" @click="retry">重新加载</button>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ title?: string; message?: string; retry?: () => void }>(), {
  title: '加载失败',
  message: '暂时无法获取数据，请稍后重试。',
})
</script>

<style scoped>
.state-panel { display: grid; place-items: center; min-height: 180px; padding: 24px 16px; text-align: center; }
.error-state { gap: 7px; color: var(--muted); font-size: 11px; }
.error-state > span { display: grid; place-items: center; width: 28px; height: 28px; color: #fff; background: var(--up); border-radius: 50%; font-weight: 700; }
.error-state strong { color: var(--text); font-size: 13px; }
.error-state p { max-width: 34em; font-size: 10px; line-height: 1.6; }
.error-state button { margin-top: 8px; }
</style>
