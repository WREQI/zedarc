import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const root = resolve(import.meta.dirname, '..')
const layout = readFileSync(resolve(root, 'src/layouts/AppLayout.vue'), 'utf8')
const base = readFileSync(resolve(root, 'src/styles/base.css'), 'utf8')

describe('navigation visual contract', () => {
  it('uses the original mini-program navigation assets', () => {
    for (const asset of ['info.png', 'info1.png', 'zx.png', 'zx1.png', 'hq.png', 'hq1.png', 'zc.png', 'zc1.png', 'me.png', 'me1.png']) {
      expect(existsSync(resolve(root, 'public/nav', asset))).toBe(true)
    }
    expect(layout).toContain("icon: '/nav/zc.png'")
    expect(layout).toContain("inactiveIcon: '/nav/zc1.png'")
    expect(layout).not.toContain("icon: '/nav/kh.png'")
  })

  it('keeps desktop navigation and mobile TabBar accessible', () => {
    expect(layout).toContain('aria-label="主导航"')
    expect(layout).toContain('aria-label="底部导航"')
    expect(layout).toContain(":aria-current=\"isSectionActive(tab.key) ? 'page' : undefined\"")
    expect(layout).toContain('aria-hidden="true"')
    expect(base).toContain(':focus-visible')
  })

  it('defines the shared safe-area and source empty-state contract', () => {
    expect(base).toContain('--safe-top: env(safe-area-inset-top, 0px)')
    expect(base).toContain('--safe-bottom: env(safe-area-inset-bottom, 0px)')
    expect(base).toContain('8b9a993dae48a9fe2b108f8d56d55a5a.png')
    expect(base).toContain('b6c9bf772cc386fe67c81c23ac5d916a.png')
    expect(base).toContain('.market-img, .market-icon img, .new-market-icon img')
    expect(base).toContain('.side-link:hover:not(.section-active):not(.router-link-exact-active)')
    expect(base).toContain('background: #edf4ff')
  })
})
