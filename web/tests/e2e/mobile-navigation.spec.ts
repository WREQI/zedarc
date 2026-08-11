import { test, expect } from '@playwright/test'

test.use({ viewport: { width: 393, height: 852 } })

test('mobile shell renders the bottom navigation without horizontal overflow', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('body')).toBeVisible()
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(await page.evaluate(() => document.documentElement.clientWidth) + 1)
  await expect(page.locator('.sidebar')).toBeHidden()
  await expect(page.locator('.tabbar')).toBeVisible()
  await expect(page.locator('.tabbar .tabbar-item')).toHaveCount(5)
  await expect(page.locator('.tabbar')).toHaveCSS('position', 'fixed')
  await expect(page.locator('.main-content')).toHaveCSS('padding-bottom', /px/)
})
