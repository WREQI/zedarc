<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
</script>

<template>
  <section class="account-subpage">
    <header class="subpage-heading"><div><p class="eyebrow">ACCOUNT / DEVICES</p><h1>登录设备</h1><p class="muted">查看账户的登录设备</p></div><RouterLink class="back-link" to="/settings?section=security">‹ 安全中心</RouterLink></header>
    <section v-if="!auth.user.value" class="empty-panel"><span class="empty-icon">◎</span><h2>请先登录</h2><p>登录后才能查看与账户关联的设备。</p><RouterLink class="primary-button" to="/account">去登录</RouterLink></section>
    <section v-else class="empty-panel"><span class="empty-icon">⌁</span><h2>暂无设备记录</h2><p>当前 API 尚未提供登录设备列表，因此暂时无法展示或管理设备。</p><span class="disabled-action">设备管理暂不可用</span></section>
    <p class="page-note">这里不会根据浏览器信息臆造设备记录，待服务端提供设备接口后再启用。</p>
  </section>
</template>

<style scoped>
.account-subpage{max-width:720px;margin:0 auto}.subpage-heading{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:22px}.subpage-heading h1{font-size:24px;margin-top:5px}.eyebrow{color:var(--primary);font:500 10px 'JetBrains Mono',monospace;letter-spacing:.12em}.back-link{color:var(--primary);font-size:11px}.muted{color:var(--muted);font-size:11px;margin-top:7px}.empty-panel{padding:58px 24px;text-align:center;background:var(--card);border:1px dashed var(--border);border-radius:6px}.empty-icon{display:block;color:#9bbbe9;font-size:32px;margin-bottom:12px}.empty-panel h2{font-size:15px}.empty-panel p{max-width:290px;margin:8px auto 18px;color:var(--muted);font-size:11px;line-height:1.7}.primary-button{display:inline-block;padding:10px 24px;border-radius:4px;background:var(--primary);color:#fff;font-size:11px}.disabled-action{display:inline-block;padding:9px 18px;border-radius:4px;background:#f0f2f5;color:#a4acb8;font-size:10px}.page-note{margin:16px 3px;color:var(--muted);font-size:10px;line-height:1.7}
</style>
