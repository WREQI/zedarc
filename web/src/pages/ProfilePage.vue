<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
</script>

<template>
  <section class="account-subpage">
    <header class="subpage-heading"><div><p class="eyebrow">ACCOUNT / PROFILE</p><h1>个人资料</h1><p class="muted">查看当前账户信息</p></div><RouterLink class="back-link" to="/settings">‹ 设置</RouterLink></header>
    <section v-if="auth.user.value" class="panel profile-summary">
      <div class="avatar-large">{{ auth.user.value.name.slice(0, 1) }}</div>
      <div><h2>{{ auth.user.value.name }}</h2><p class="muted">已登录账户</p></div>
    </section>
    <section v-if="auth.user.value" class="panel detail-list">
      <div class="detail-row"><span>用户 ID</span><strong class="mono">{{ auth.user.value.id }}</strong></div>
      <div class="detail-row"><span>手机号</span><strong>{{ auth.user.value.phone ?? '未提供' }}</strong></div>
      <div class="detail-row"><span>头像</span><strong>{{ auth.user.value.avatar ? '已设置' : '未设置' }}</strong></div>
    </section>
    <section v-else class="empty-panel"><span class="empty-icon">◎</span><h2>请先登录</h2><p>登录后才能查看账户资料。当前没有可展示的用户信息。</p><RouterLink class="primary-button" to="/account">去登录</RouterLink></section>
    <p class="page-note">资料编辑接口尚未提供，当前页面仅展示服务端已返回的账户信息。</p>
  </section>
</template>

<style scoped>
.account-subpage{max-width:720px;margin:0 auto}.subpage-heading{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:22px}.subpage-heading h1{font-size:24px;margin-top:5px}.eyebrow{color:var(--primary);font:500 10px 'JetBrains Mono',monospace;letter-spacing:.12em}.back-link{color:var(--primary);font-size:11px}.panel{background:var(--card);border:1px solid var(--border);border-radius:6px}.profile-summary{display:flex;align-items:center;gap:14px;padding:22px;margin-bottom:12px}.avatar-large{display:grid;place-items:center;width:54px;height:54px;border-radius:50%;background:#eaf2ff;color:var(--primary);font-size:21px;font-weight:600}.profile-summary h2{font-size:16px}.muted{color:var(--muted);font-size:11px;margin-top:7px}.detail-list{padding:0 16px}.detail-row{display:flex;align-items:center;justify-content:space-between;min-height:56px;border-bottom:1px solid var(--border);font-size:11px}.detail-row:last-child{border:0}.detail-row span{color:var(--muted)}.detail-row strong{font-size:11px;font-weight:500}.mono{font-family:'JetBrains Mono',monospace}.empty-panel{padding:50px 24px;text-align:center;background:var(--card);border:1px dashed var(--border);border-radius:6px}.empty-icon{display:block;color:#9bbbe9;font-size:31px;margin-bottom:12px}.empty-panel h2{font-size:15px}.empty-panel p{max-width:260px;margin:8px auto 18px;color:var(--muted);font-size:11px;line-height:1.7}.primary-button{display:inline-block;padding:10px 24px;border-radius:4px;background:var(--primary);color:#fff;font-size:11px}.page-note{margin:16px 3px;color:var(--muted);font-size:10px;line-height:1.7}@media(max-width:520px){.subpage-heading h1{font-size:21px}}
</style>
