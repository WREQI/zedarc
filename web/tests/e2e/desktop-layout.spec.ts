import { test, expect } from '@playwright/test'

test.describe('desktop shell layout', () => {
  test.use({ viewport: { width: 1600, height: 1100 } })

  test('account page keeps its header actions aligned with the content column', async ({ page }) => {
    await page.goto('/account')
    await expect(page.getByRole('heading', { name: '我的', exact: true })).toBeVisible()

    const layout = await page.evaluate(() => {
      const account = document.querySelector<HTMLElement>('.account-page')
      const action = document.querySelector<HTMLElement>('.account-page .header-action')
      const sidebar = document.querySelector<HTMLElement>('.sidebar')
      const trade = document.querySelector<HTMLElement>('.side-link[data-nav-key="trade"]')
      const profile = document.querySelector<HTMLElement>('.side-link[data-nav-key="account"]')
      if (!account || !action || !sidebar || !trade || !profile) throw new Error('desktop shell elements are missing')
      const accountRect = account.getBoundingClientRect()
      const actionRect = action.getBoundingClientRect()
      const sidebarRect = sidebar.getBoundingClientRect()
      return {
        accountWidth: accountRect.width,
        actionOffsetFromRight: accountRect.right - actionRect.right,
        sidebarWidth: sidebarRect.width,
        profileActive: profile.classList.contains('section-active'),
        tradeActive: trade.classList.contains('section-active'),
        iconStates: Array.from(document.querySelectorAll<HTMLElement>('.side-link')).map((link) => ({
          key: link.dataset.navKey,
          active: getComputedStyle(link.querySelector<HTMLElement>('.nav-icon-active')!).display,
          inactive: getComputedStyle(link.querySelector<HTMLElement>('.nav-icon-inactive')!).display,
        })),
        overflow: document.documentElement.scrollWidth > window.innerWidth,
      }
    })

    expect(layout.accountWidth).toBeLessThanOrEqual(720)
    expect(layout.actionOffsetFromRight).toBeLessThanOrEqual(4)
    expect(layout.sidebarWidth).toBe(178)
    expect(layout.profileActive).toBe(true)
    expect(layout.tradeActive).toBe(false)
    expect(layout.iconStates).toEqual([
      { key: 'news', active: 'none', inactive: 'block' },
      { key: 'watchlist', active: 'none', inactive: 'block' },
      { key: 'market', active: 'none', inactive: 'block' },
      { key: 'trade', active: 'none', inactive: 'block' },
      { key: 'account', active: 'block', inactive: 'none' },
    ])
    expect(layout.overflow).toBe(false)
  })
})
