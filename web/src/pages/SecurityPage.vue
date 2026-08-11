<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
</script>

<template>
  <section class="account-subpage">
    <header class="subpage-heading"><div><p class="eyebrow">ACCOUNT / SECURITY</p><h1>安全中心</h1><p class="muted">管理登录状态与账户安全</p></div><RouterLink class="back-link" to="/settings">‹ 设置</RouterLink></header>
    <section v-if="auth.user.value" class="panel status-card"><span class="status-dot" /><div><strong>当前账户已登录</strong><p>登录凭证由现有认证服务管理。</p></div></section>
    <section v-else class="empty-panel"><span class="empty-icon">◇</span><h2>未登录</h2><p>登录后才能查看安全状态。请先完成手机号登录。</p><RouterLink class="primary-button" to="/account">去登录</RouterLink></section>
    <section class="panel security-list">
      <div class="security-row"><div><strong>登录密码</strong><small>当前登录方式为手机号验证码</small></div><span class="unavailable">暂不支持</span></div>
      <div class="security-row"><div><strong>双重验证</strong><small>服务端暂未提供配置接口</small></div><span class="unavailable">暂不支持</span></div>
      <div class="security-row"><div><strong>登录设备</strong><small>可查看设备列表，但当前没有设备接口</small></div><RouterLink class="row-link" to="/settings?section=devices">查看 ›</RouterLink></div>
    </section>
    <p class="page-note">为避免产生误导，未接入接口的安全操作不会显示为可提交按钮。</p>
  </section>
</template>

<style scoped>
.account-subpage{max-width:720px;margin:0 auto}.subpage-heading{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:22px}.subpage-heading h1{font-size:24px;margin-top:5px}.eyebrow{color:var(--primary);font:500 10px 'JetBrains Mono',monospace;letter-spacing:.12em}.back-link,.row-link{color:var(--primary);font-size:11px}.muted{color:var(--muted);font-size:11px;margin-top:7px}.panel{background:var(--card);border:1px solid var(--border);border-radius:6px}.status-card{display:flex;align-items:center;gap:12px;padding:16px;margin-bottom:12px;background:#f2f8f3;border-color:#dcefe0}.status-dot{width:9px;height:9px;border-radius:50%;background:var(--down)}.status-card strong{font-size:12px}.status-card p{color:var(--muted);font-size:10px;margin-top:5px}.security-list{padding:0 16px}.security-row{display:flex;align-items:center;justify-content:space-between;min-height:66px;border-bottom:1px solid var(--border)}.security-row:last-child{border:0}.security-row strong,.security-row small{display:block}.security-row strong{font-size:12px;font-weight:500}.security-row small{margin-top:5px;color:var(--muted);font-size:10px}.unavailable{color:#a8afbb;font-size:10px}.empty-panel{padding:50px 24px;text-align:center;background:var(--card);border:1px dashed var(--border);border-radius:6px;margin-bottom:12px}.empty-icon{display:block;color:#9bbbe9;font-size:31px;margin-bottom:12px}.empty-panel h2{font-size:15px}.empty-panel p{max-width:260px;margin:8px auto 18px;color:var(--muted);font-size:11px;line-height:1.7}.primary-button{display:inline-block;padding:10px 24px;border-radius:4px;background:var(--primary);color:#fff;font-size:11px}.page-note{margin:16px 3px;color:var(--muted);font-size:10px;line-height:1.7}
</style>
