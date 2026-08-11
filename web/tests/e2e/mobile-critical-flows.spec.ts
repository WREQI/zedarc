import { test, expect, type Page } from '@playwright/test'

const mobileWidth = 393

async function expectNoHorizontalOverflow(page: Page) {
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(mobileWidth + 1)
}

test.describe('mobile critical flows', () => {
  test.use({ viewport: { width: mobileWidth, height: 852 } })

  test('home and watchlist expose stable tabs, list and empty states', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: '自选', exact: true })).toBeVisible()
    await expect(page.getByRole('navigation', { name: '自选分组' })).toBeVisible()
    await expect(page.locator('.quote-list, .empty-state-common')).toBeVisible({ timeout: 10000 })
    await expectNoHorizontalOverflow(page)

    await page.getByRole('link', { name: '自选' }).last().click()
    await expect(page).toHaveURL(/\/watchlist$/)
    await expect(page.getByRole('heading', { name: '自选', exact: true })).toBeVisible()
    await expect(page.locator('.group-tabs')).toBeVisible()
    await expect(page.locator('.quote-list, .empty-state-common')).toBeVisible({ timeout: 10000 })
    await expectNoHorizontalOverflow(page)
  })

  test('market ranking keeps market and rank tabs usable on a narrow viewport', async ({ page }) => {
    await page.goto('/market/rank')
    await expect(page.getByRole('heading', { name: '行情排行中心' })).toBeVisible()
    await expect(page.getByRole('tablist', { name: '排行类型' })).toBeVisible()
    await expect(page.getByRole('tab', { name: '涨幅榜', exact: true })).toHaveAttribute('aria-selected', 'true')
    await expect(page.locator('.rank-panel .loading-state, .rank-panel .quote-item, .rank-panel .empty-state-common, .rank-panel .error-state')).toBeVisible({ timeout: 10000 })
    await expectNoHorizontalOverflow(page)

    await page.getByRole('tab', { name: '成交额', exact: true }).click()
    await expect(page.getByRole('tab', { name: '成交额', exact: true })).toHaveAttribute('aria-selected', 'true')
  })

  test('stock detail keeps the chart tabs and fixed action bar within the viewport', async ({ page }) => {
    await page.goto('/stock/000001')
    await expect(page.getByText('股票详情', { exact: true })).toBeVisible()
    await expect(page.locator('.detail-tabs')).toBeVisible({ timeout: 10000 })
    expect(await page.locator('.detail-tabs button').count()).toBeGreaterThanOrEqual(8)
    await expect(page.locator('.bottom-bar')).toBeVisible()
    await expect(page.locator('.bottom-bar')).toHaveCSS('position', 'fixed')
    await page.locator('.detail-tabs button', { hasText: '资讯' }).click()
    await expect(page.getByRole('heading', { name: '相关资讯' })).toBeVisible()
    await expectNoHorizontalOverflow(page)
  })

  test('trade can enter confirmation without changing the order business flow', async ({ page }) => {
    await page.goto('/trade')
    const demoButton = page.getByRole('button', { name: '体验模拟交易' })
    if (await demoButton.isVisible().catch(() => false)) await demoButton.click()
    await expect(page.getByRole('button', { name: /确认买入/ })).toBeVisible({ timeout: 10000 })
    await page.getByRole('textbox', { name: '价格 元' }).fill('10.00')
    await page.getByRole('button', { name: /确认买入/ }).click()
    await expect(page.getByRole('heading', { name: '确认下单' })).toBeVisible({ timeout: 10000 })
    await expect(page.getByText('ORDER CONFIRMATION')).toBeVisible()
    await expect(page.getByRole('button', { name: '确认下单' })).toBeVisible()
    await expectNoHorizontalOverflow(page)
  })

  test('news recommendations render loading, list or empty state consistently', async ({ page }) => {
    await page.goto('/news?view=recommendations')
    await expect(page.getByRole('heading', { name: '个性化推荐' })).toBeVisible()
    await expect(page.locator('.recommend-list, .empty-state-common, .error-state')).toBeVisible({ timeout: 10000 })
    await expect(page.getByRole('button', { name: '刷新推荐' })).toBeVisible()
    await expectNoHorizontalOverflow(page)
  })

  test('settings renders controls for an authenticated mobile session', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('zedarc-access-token', 'e2e-token')
      localStorage.setItem('zedarc-user', JSON.stringify({ id: 'e2e', name: '测试用户' }))
    })
    await page.goto('/settings')
    await expect(page).toHaveURL(/\/settings(?:\?section=)?$/)
    await expect(page.getByRole('heading', { name: '设置' })).toBeVisible({ timeout: 10000 })
    await expect(page.getByRole('heading', { name: '账户与安全' })).toBeVisible()
    await expect(page.getByRole('button', { name: '资讯推送已关闭' }).or(page.getByRole('button', { name: '资讯推送已开启' }))).toBeVisible()
    await expectNoHorizontalOverflow(page)
  })
})
