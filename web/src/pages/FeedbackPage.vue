<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const message = ref('')
</script>

<template>
  <section class="account-subpage">
    <header class="subpage-heading"><div><p class="eyebrow">ACCOUNT / FEEDBACK</p><h1>意见反馈</h1><p class="muted">告诉我们你的使用建议</p></div><RouterLink class="back-link" to="/settings">‹ 设置</RouterLink></header>
    <section v-if="!auth.user.value" class="empty-panel"><span class="empty-icon">◇</span><h2>请先登录</h2><p>登录后才能提交与账户关联的反馈。</p><RouterLink class="primary-button" to="/account">去登录</RouterLink></section>
    <section v-else class="panel feedback-form">
      <label for="feedback">反馈内容</label><textarea id="feedback" v-model="message" rows="6" maxlength="500" placeholder="请描述你遇到的问题或建议（当前仅供填写预览）" /><div class="form-footer"><span>{{ message.length }}/500</span><button disabled>提交反馈</button></div>
      <p class="unavailable-note">反馈提交接口尚未接入，当前不会发送或保存内容。</p>
    </section>
  </section>
</template>

<style scoped>
.account-subpage{max-width:720px;margin:0 auto}.subpage-heading{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:22px}.subpage-heading h1{font-size:23px;margin-top:5px;line-height:1.15}.eyebrow{color:var(--primary);font:500 10px 'JetBrains Mono',monospace;letter-spacing:.12em}.back-link{color:var(--primary);font-size:11px}.muted{color:var(--muted);font-size:11px;margin-top:7px}.panel{background:var(--card);border:1px solid var(--border);border-radius:6px}.feedback-form{padding:18px}.feedback-form label{display:block;font-size:12px;font-weight:500;margin-bottom:9px}.feedback-form textarea{display:block;width:100%;resize:vertical;min-height:140px;padding:11px;border:1px solid var(--border);border-radius:4px;background:var(--bg);color:var(--text);font:11px/1.7 inherit;outline:0}.feedback-form textarea:focus{border-color:var(--primary)}.form-footer{display:flex;align-items:center;justify-content:space-between;margin-top:10px;color:var(--muted);font:10px 'JetBrains Mono',monospace}.form-footer button{padding:9px 18px;border:0;border-radius:4px;background:var(--primary);color:#fff;font-size:10px}.unavailable-note{margin-top:14px;padding:10px 11px;border-radius:4px;background:#fff8ed;color:#a17842;font-size:10px;line-height:1.6}.empty-panel{padding:50px 24px;text-align:center;background:var(--card);border:1px dashed var(--border);border-radius:6px}.empty-icon{display:block;color:#9bbbe9;font-size:31px;margin-bottom:12px}.empty-panel h2{font-size:15px}.empty-panel p{max-width:260px;margin:8px auto 18px;color:var(--muted);font-size:11px;line-height:1.7}.primary-button{display:inline-block;padding:10px 24px;border-radius:4px;background:var(--primary);color:#fff;font-size:11px}
</style>
