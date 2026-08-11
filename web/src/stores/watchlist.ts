import { computed, ref } from 'vue'
import { apiFetch, getAccessToken } from '@/services/api-client'

export interface WatchlistItem { code: string; name?: string; groupId?: string; sortOrder: number; createdAt: string }
export interface WatchlistGroup { id: string; name: string; sortOrder: number; itemCount: number; upCount: number; downCount: number; createdAt: string }

const key = 'zedarc-watchlist'
const recentKey = 'zedarc-recent-stocks'
const groupsKey = 'zedarc-watchlist-groups'
const itemsKey = 'zedarc-watchlist-group-items'
const selectedCodes = ref<string[]>([])
const recentCodes = ref<string[]>([])
const groups = ref<WatchlistGroup[]>([])
const itemsByGroup = ref<Record<string, WatchlistItem[]>>({ default: [] })
let initialized = false

function readStrings(keyName: string): string[] {
  if (typeof window === 'undefined') return []
  try { const value: unknown = JSON.parse(window.localStorage.getItem(keyName) ?? '[]'); return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [] } catch { return [] }
}
function readJson<T>(keyName: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback
  try { return JSON.parse(window.localStorage.getItem(keyName) ?? '') as T } catch { return fallback }
}
function persist() { if (typeof window !== 'undefined') window.localStorage.setItem(key, JSON.stringify(selectedCodes.value)) }
function persistLocalGroups() {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(groupsKey, JSON.stringify(groups.value))
  window.localStorage.setItem(itemsKey, JSON.stringify(itemsByGroup.value))
}
function init() {
  if (initialized) return
  selectedCodes.value = readStrings(key)
  recentCodes.value = readStrings(recentKey)
  groups.value = readJson<WatchlistGroup[]>(groupsKey, []).sort((a, b) => a.sortOrder - b.sortOrder)
  itemsByGroup.value = { default: [], ...readJson<Record<string, WatchlistItem[]>>(itemsKey, {}) }
  initialized = true
}
function setDefaultItems(items: WatchlistItem[]) { itemsByGroup.value.default = items; selectedCodes.value = items.map((item) => item.code); persist(); persistLocalGroups() }
function localGroup(name: string): WatchlistGroup { const now = new Date().toISOString(); return { id: `local-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, name, sortOrder: groups.value.length, itemCount: 0, upCount: 0, downCount: 0, createdAt: now } }
function updateGroupCount(id: string) { const items = itemsByGroup.value[id] ?? []; groups.value = groups.value.map((group) => group.id === id ? { ...group, itemCount: items.length } : group) }

export function useWatchlistStore() {
  init()
  const has = (code: string, groupId?: string | null) => (groupId ? (itemsByGroup.value[groupId] ?? []).some((item) => item.code === code) : selectedCodes.value.includes(code))
  async function hydrate() {
    if (!getAccessToken()) return
    try {
      const [defaultItems, remoteGroups] = await Promise.all([apiFetch<WatchlistItem[]>('/api/watchlist'), apiFetch<WatchlistGroup[]>('/api/watchlist/groups')])
      setDefaultItems(defaultItems); groups.value = remoteGroups
      const groupEntries = await Promise.all(remoteGroups.map(async (group) => [group.id, await apiFetch<WatchlistItem[]>(`/api/watchlist/groups/${group.id}/items`)] as const))
      itemsByGroup.value = { default: defaultItems, ...Object.fromEntries(groupEntries) }; persistLocalGroups()
    } catch { /* retain local cache when the API is unavailable */ }
  }
  async function createGroup(name: string) {
    let group: WatchlistGroup
    if (getAccessToken()) { try { group = await apiFetch<WatchlistGroup>('/api/watchlist/groups', { method: 'POST', body: JSON.stringify({ name }) }) } catch { group = localGroup(name) } } else group = localGroup(name)
    groups.value = [...groups.value, group]; itemsByGroup.value[group.id] = []; persistLocalGroups(); return group
  }
  async function renameGroup(id: string, name: string) {
    let patch: Partial<WatchlistGroup> = { name }
    if (getAccessToken()) { try { patch = await apiFetch<WatchlistGroup>(`/api/watchlist/groups/${id}`, { method: 'PATCH', body: JSON.stringify({ name }) }) } catch { /* optimistic local fallback */ } }
    groups.value = groups.value.map((item) => item.id === id ? { ...item, ...patch } : item); persistLocalGroups(); return groups.value.find((item) => item.id === id)
  }
  async function deleteGroup(id: string) {
    if (getAccessToken()) { try { await apiFetch(`/api/watchlist/groups/${id}`, { method: 'DELETE' }) } catch { /* continue with local state */ } }
    const moved = itemsByGroup.value[id] ?? []; const next = { ...itemsByGroup.value }; delete next[id]
    next.default = [...(next.default ?? []), ...moved.map((item, index) => ({ ...item, groupId: undefined, sortOrder: (next.default ?? []).length + index }))]
    itemsByGroup.value = next; groups.value = groups.value.filter((group) => group.id !== id); setDefaultItems(next.default); persistLocalGroups()
  }
  async function addToGroup(groupId: string, code: string, name?: string) {
    let item: WatchlistItem = { code, name, groupId, sortOrder: (itemsByGroup.value[groupId] ?? []).length, createdAt: new Date().toISOString() }
    if (getAccessToken()) { try { item = await apiFetch<WatchlistItem>(`/api/watchlist/groups/${groupId}/items`, { method: 'POST', body: JSON.stringify({ code, name }) }) } catch { /* local fallback */ } }
    itemsByGroup.value[groupId] = [...(itemsByGroup.value[groupId] ?? []).filter((value) => value.code !== code), item]; updateGroupCount(groupId); persistLocalGroups(); return item
  }
  async function move(code: string, groupId: string | null, sortOrder?: number) {
    let item: WatchlistItem = { code, groupId: groupId ?? undefined, sortOrder: sortOrder ?? 0, createdAt: new Date().toISOString() }
    if (getAccessToken()) { try { item = await apiFetch<WatchlistItem>('/api/watchlist/move', { method: 'POST', body: JSON.stringify({ code, groupId, sortOrder }) }) } catch { /* local fallback */ } }
    const next = { ...itemsByGroup.value }; for (const id of ['default', ...groups.value.map((group) => group.id)]) next[id] = (next[id] ?? []).filter((value) => value.code !== code)
    const target = groupId ?? 'default'; next[target] = [...(next[target] ?? []), item].sort((a, b) => a.sortOrder - b.sortOrder); itemsByGroup.value = next
    if (groupId === null) { selectedCodes.value = next.default.map((value) => value.code); persist() }; groups.value.forEach((group) => updateGroupCount(group.id)); persistLocalGroups(); return item
  }
  async function removeFromGroup(code: string, groupId: string) { if (getAccessToken()) { try { await apiFetch(`/api/watchlist/groups/${groupId}/items/${code}`, { method: 'DELETE' }) } catch { /* local fallback */ } }; itemsByGroup.value[groupId] = (itemsByGroup.value[groupId] ?? []).filter((item) => item.code !== code); updateGroupCount(groupId); persistLocalGroups() }
  async function remove(code: string) { selectedCodes.value = selectedCodes.value.filter((item) => item !== code); persist(); if (getAccessToken()) { try { await apiFetch(`/api/watchlist/${code}`, { method: 'DELETE' }) } catch { /* optimistic local update */ } }; itemsByGroup.value.default = itemsByGroup.value.default.filter((item) => item.code !== code); persistLocalGroups() }
  function toggle(code: string) { const removing = has(code); if (removing) void remove(code); else { selectedCodes.value = [...selectedCodes.value, code]; persist(); itemsByGroup.value.default = [...itemsByGroup.value.default, { code, sortOrder: selectedCodes.value.length - 1, createdAt: new Date().toISOString() }]; if (getAccessToken()) void apiFetch('/api/watchlist', { method: 'POST', body: JSON.stringify({ code }) }).catch(() => undefined); persistLocalGroups() } }
  async function removeBatch(codes: string[], groupId?: string | null) { if (!codes.length) return; if (getAccessToken()) { try { await apiFetch('/api/watchlist/batch', { method: 'DELETE', body: JSON.stringify({ codes, ...(groupId ? { groupId } : {}) }) }) } catch { /* local fallback */ } }; const target = groupId ?? 'default'; itemsByGroup.value[target] = (itemsByGroup.value[target] ?? []).filter((item) => !codes.includes(item.code)); if (!groupId) { selectedCodes.value = selectedCodes.value.filter((code) => !codes.includes(code)); persist() }; if (groupId) updateGroupCount(groupId); persistLocalGroups() }
  async function reorder(groupId: string | null, codes: string[]) { if (getAccessToken()) { try { await apiFetch<WatchlistItem[]>('/api/watchlist/order', { method: 'PUT', body: JSON.stringify({ groupId, codes }) }) } catch { /* local fallback */ } }; const target = groupId ?? 'default'; const current = itemsByGroup.value[target] ?? []; itemsByGroup.value[target] = codes.map((code, sortOrder) => ({ ...current.find((item) => item.code === code), code, sortOrder, createdAt: current.find((item) => item.code === code)?.createdAt ?? new Date().toISOString() })); persistLocalGroups() }
  async function reorderGroups(ids: string[]) { if (getAccessToken()) { try { await apiFetch('/api/watchlist/groups/order', { method: 'PUT', body: JSON.stringify({ ids }) }) } catch { /* local fallback */ } }; groups.value = ids.map((id, sortOrder) => ({ ...groups.value.find((group) => group.id === id)!, sortOrder })).filter((group) => Boolean(group.id)); persistLocalGroups() }
  function addRecent(code: string) { recentCodes.value = [code, ...recentCodes.value.filter((item) => item !== code)].slice(0, 12); window.localStorage.setItem(recentKey, JSON.stringify(recentCodes.value)) }
  function clearRecent() { recentCodes.value = []; window.localStorage.removeItem(recentKey) }
  return { selectedCodes, recentCodes, groups, itemsByGroup, defaultItems: computed(() => itemsByGroup.value.default ?? []), count: computed(() => selectedCodes.value.length), has, hydrate, createGroup, renameGroup, deleteGroup, addToGroup, move, removeFromGroup, removeBatch, reorder, reorderGroups, toggle, remove, addRecent, clearRecent }
}
