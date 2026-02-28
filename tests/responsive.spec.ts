import { test, expect } from '@playwright/test'

const routes = [
  { path: '/', name: 'home' },
  { path: '/blog', name: 'blog' },
  { path: '/blog/hello-world', name: 'blog-post' },
  { path: '/projects/lynxonboard', name: 'project-lynxonboard' },
  { path: '/projects/onlyfunds', name: 'project-onlyfunds' },
  { path: '/projects/mobile-project', name: 'project-mobile' },
]

for (const { path, name } of routes) {
  test.describe(name, () => {
    test('loads without error', async ({ page }) => {
      const response = await page.goto(path)
      expect(response?.status()).toBeLessThan(400)
    })

    test('no horizontal overflow', async ({ page }) => {
      await page.goto(path)
      const hasOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth
      )
      expect(hasOverflow, 'Page has horizontal overflow — likely a mobile layout issue').toBe(false)
    })

    test('nav is visible', async ({ page }) => {
      await page.goto(path)
      await expect(page.locator('nav')).toBeVisible()
    })

    test('screenshot', async ({ page }) => {
      await page.goto(path)
      // Wait for CSS animations and fonts to settle
      await page.waitForTimeout(600)
      await expect(page).toHaveScreenshot(`${name}.png`, {
        fullPage: true,
        // Allow slight pixel differences from antialiasing across OSes
        maxDiffPixelRatio: 0.02,
      })
    })
  })
}
