<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { meApi, updateProfileApi } from '@/services/api-client'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const displayName = ref('')
const avatar = ref('')
const loading = ref(true)
const saving = ref(false)
const error = ref('')
const message = ref('')
onMounted(async () => {
  if (!auth.user.value) return
  try { const user = await meApi(); displayName.value = user.name ?? user.phone; avatar.value = user.avatar ?? '' }
  catch (e) { error.value = e instanceof Error ? e.message : '资料读取失败' }
  finally { loading.value = false }
})
async function save() {
  saving.value = true; error.value = ''; message.value = ''
  try {
    const user = await updateProfileApi({ displayName: displayName.value, avatar: avatar.value || null })
    auth.setUser(user); message.value = '资料已保存'
  } catch (e) { error.value = e instanceof Error ? e.message : '资料保存失败' }
  finally { saving.value = false }
}
</script>

<template>
  <section class="account-subpage">
    <header class="subpage-heading"><div><p class="eyebrow">ACCOUNT / PROFILE</p><h1>个人资料</h1><p class="muted">查看当前账户信息</p></div><RouterLink class="back-link" to="/settings">‹ 设置</RouterLink></header>
    <template v-if="auth.user.value">
      <section class="panel profile-summary">
        <div class="avatar-large">{{ (displayName || auth.user.value.name).slice(0, 1) }}</div>
        <div><h2>{{ displayName || auth.user.value.name }}</h2><p class="muted">资料由服务端账户接口提供</p></div>
      </section>
      <section class="panel detail-list" :class="{ faded: loading }">
        <label class="detail-row"><span>显示名称</span><input v-model="displayName" maxlength="80" placeholder="请输入显示名称" /></label>
        <label class="detail-row"><span>头像地址</span><input v-model="avatar" maxlength="1000" placeholder="可选，填写图片地址" /></label>
        <div class="detail-row"><span>用户 ID</span><strong class="mono">{{ auth.user.value.id }}</strong></div>
        <div class="detail-row"><span>手机号</span><strong>{{ auth.user.value.phone ?? '未提供' }}</strong></div>
        <div class="form-actions"><button class="primary-button" :disabled="loading || saving" @click="save">{{ saving ? '保存中…' : '保存资料' }}</button></div>
      </section>
      <p v-if="error" class="error">{{ error }}</p><p v-if="message" class="success">{{ message }}</p>
    </template>
    <section v-else class="empty-panel"><span class="empty-icon">◎</span><h2>请先登录</h2><p>登录后才能查看账户资料。当前没有可展示的用户信息。</p><RouterLink class="primary-button" to="/account">去登录</RouterLink></section>
    <p class="page-note">敏感字段（手机号）由验证码登录流程管理，资料更新会经过服务端校验。</p>
  </section>
</template>

<style scoped>
.account-subpage{max-width:720px;margin:0 auto}.subpage-heading{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:22px}.subpage-heading h1{font-size:24px;margin-top:5px}.eyebrow{color:var(--primary);font:500 10px 'JetBrains Mono',monospace;letter-spacing:.12em}.back-link{color:var(--primary);font-size:11px}.panel{background:var(--card);border:1px solid var(--border);border-radius:6px}.profile-summary{display:flex;align-items:center;gap:14px;padding:22px;margin-bottom:12px}.avatar-large{display:grid;place-items:center;width:54px;height:54px;border-radius:50%;background:#eaf2ff;color:var(--primary);font-size:21px;font-weight:600}.profile-summary h2{font-size:16px}.muted{color:var(--muted);font-size:11px;margin-top:7px}.detail-list{padding:0 16px}.detail-row{display:flex;align-items:center;justify-content:space-between;min-height:56px;border-bottom:1px solid var(--border);font-size:11px}.detail-row:last-child{border:0}.detail-row span{color:var(--muted)}.detail-row strong{font-size:11px;font-weight:500}.detail-row input{width:58%;border:1px solid var(--border);border-radius:4px;padding:8px;color:var(--text);font-size:11px;text-align:right}.faded{opacity:.65}.form-actions{padding:14px 0}.primary-button{border:0;cursor:pointer}.primary-button:disabled{opacity:.6}.error{color:#c85c5c;font-size:11px;margin-top:10px}.success{color:#4f9b70;font-size:11px;margin-top:10px}.mono{font-family:'JetBrains Mono',monospace}.empty-panel{padding:50px 24px;text-align:center;background:var(--card);border:1px dashed var(--border);border-radius:6px}.empty-icon{display:block;color:#9bbbe9;font-size:31px;margin-bottom:12px}.empty-panel h2{font-size:15px}.empty-panel p{max-width:260px;margin:8px auto 18px;color:var(--muted);font-size:11px;line-height:1.7}.primary-button{display:inline-block;padding:10px 24px;border-radius:4px;background:var(--primary);color:#fff;font-size:11px}.page-note{margin:16px 3px;color:var(--muted);font-size:10px;line-height:1.7}@media(max-width:520px){.subpage-heading h1{font-size:21px}}
</style>
