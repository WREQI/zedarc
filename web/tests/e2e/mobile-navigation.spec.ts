import { test, expect } from '@playwright/test'

test('mobile shell renders navigation without horizontal overflow', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('body')).toBeVisible()
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(await page.evaluate(() => document.documentElement.clientWidth) + 1)
})
