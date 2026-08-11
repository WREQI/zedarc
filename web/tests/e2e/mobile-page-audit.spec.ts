import { test, expect, type Page } from '@playwright/test'

const routes = [
  '/', '/market', '/market/rank', '/market/sentiment', '/market/limit-up', '/market/limit-down',
  '/sector', '/etf', '/trade', '/trade/orders', '/trade/positions', '/trade/funds', '/trade/transactions',
  '/news', '/news?view=recommendations', '/flash', '/reports', '/account', '/history', '/settings',
  '/notifications', '/alerts', '/stock/000001', '/sector/industry-1', '/etf/510300',
]

async function expectNoOverflow(page: Page) {
  const sizes = await page.evaluate(() => ({ scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth }))
  expect(sizes.scrollWidth).toBeLessThanOrEqual(sizes.clientWidth + 1)
}

test.describe('全站移动端逐页验收', () => {
  test.use({ viewport: { width: 393, height: 852 } })

  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('zedarc-access-token', 'mobile-audit-token')
      localStorage.setItem('zedarc-user', JSON.stringify({ id: 'mobile-audit', name: '移动端验收用户', phone: '13800000000' }))
    })
  })

  for (const route of routes) {
    test(`页面 ${route} 无横向溢出且保留底部导航`, async ({ page }) => {
      await page.goto(route, { waitUntil: 'domcontentloaded' })
      await page.waitForFunction(() => document.body.childElementCount > 0, undefined, { timeout: 10000 })
      await expect(page.locator('body')).toBeVisible()
      await expect(page.locator('.tabbar')).toBeVisible()
      await expectNoOverflow(page)
    })
  }
})
