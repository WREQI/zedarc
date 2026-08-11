import { chromium } from 'playwright'

const routes = [
  '/', '/market', '/market/rank', '/market/sentiment', '/market/limit-up', '/market/limit-down',
  '/market/calendar', '/sector', '/sector/industry-1', '/etf', '/etf/510300', '/market/global',
  '/bond', '/star-market', '/reports', '/reports/1', '/alerts', '/flash', '/notifications',
  '/history', '/settings', '/profile', '/security', '/devices', '/feedback', '/stock/000001',
  '/watchlist', '/watchlist/groups', '/trade', '/trade/positions', '/trade/positions/000001',
  '/trade/orders', '/trade/orders/1', '/trade/funds', '/trade/transactions', '/news',
  '/news/favorites', '/news/topics', '/news/topics/1', '/news/1', '/account', '/search',
]

const viewports = [
  { name: 'desktop', width: 1600, height: 1100 },
  { name: 'mobile', width: 393, height: 852 },
]

const browser = await chromium.launch({ headless: true })
const results = []

for (const viewport of viewports) {
  const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } })
  await context.addInitScript(() => {
    window.localStorage.setItem('zedarc-access-token', 'audit-token')
    window.localStorage.setItem('zedarc-user', JSON.stringify({ id: 'audit', name: '审计用户' }))
  })
  const page = await context.newPage()
  for (const route of routes) {
    try {
      await page.goto(`http://127.0.0.1:5173${route}`, { waitUntil: 'networkidle', timeout: 15000 })
      await page.waitForTimeout(400)
      const data = await page.evaluate(() => {
        const docWidth = document.documentElement.scrollWidth
        const winWidth = window.innerWidth
        const overflow = docWidth > winWidth + 1
        const overflowingElements = []
        if (overflow) {
          for (const el of document.querySelectorAll('body *')) {
            const rect = el.getBoundingClientRect()
            if (rect.right > winWidth + 2 && rect.width > 0) {
              overflowingElements.push({
                tag: el.tagName,
                cls: el.className && typeof el.className === 'string' ? el.className.slice(0, 80) : '',
                right: Math.round(rect.right),
                width: Math.round(rect.width),
              })
            }
          }
        }
        const fontIssues = []
        for (const el of document.querySelectorAll('body *')) {
          const style = getComputedStyle(el)
          const size = parseFloat(style.fontSize)
          const text = el.textContent ? el.textContent.trim() : ''
          if (!text) continue
          const isLeaf = el.children.length === 0
          if (!isLeaf) continue
          const rect = el.getBoundingClientRect()
          if (rect.width === 0 || rect.height === 0) continue
          if (size > 0 && size < 8) {
            fontIssues.push({ tag: el.tagName, cls: (el.className || '').toString().slice(0, 60), size, text: text.slice(0, 30) })
          }
        }
        return { overflow, docWidth, winWidth, overflowingElements: overflowingElements.slice(0, 5), fontIssues: fontIssues.slice(0, 10) }
      })
      results.push({ viewport: viewport.name, route, ...data })
    } catch (error) {
      results.push({ viewport: viewport.name, route, error: String(error).slice(0, 200) })
    }
  }
  await context.close()
}

await browser.close()

const overflowing = results.filter((r) => r.overflow)
const fontProblems = results.filter((r) => r.fontIssues && r.fontIssues.length > 0)
const errored = results.filter((r) => r.error)

console.log('=== OVERFLOW ===')
console.log(JSON.stringify(overflowing, null, 2))
console.log('=== FONT ISSUES ===')
console.log(JSON.stringify(fontProblems, null, 2))
console.log('=== ERRORS ===')
console.log(JSON.stringify(errored, null, 2))
console.log('TOTAL ROUTES CHECKED:', results.length, 'OVERFLOW:', overflowing.length, 'FONT ISSUES:', fontProblems.length, 'ERRORS:', errored.length)
