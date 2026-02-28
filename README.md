To add a blog post: drop a .md file in content/blog/ with frontmatter (title, date, excerpt, tags).

To add a project: edit data/projects.ts and add an entry.

To deploy to Vercel:


cd dbohltech-next
npx vercel
Or connect the GitHub repo in the Vercel dashboard — it'll auto-detect Next.js and configure everything.

To run locally:


cd dbohltech-next
npm run dev


playwright.config.ts — 6 device projects: Desktop Chrome, Firefox, Safari, iPad, iPhone 12, Pixel 5
tests/responsive.spec.ts — 4 tests × 6 pages × 6 devices = 144 total test runs
package.json — added @playwright/test and 3 new scripts
Tests per page:

Loads without error — HTTP status < 400
No horizontal overflow — catches broken mobile layouts
Nav is visible — nav element present and visible
Screenshot — visual snapshot via toHaveScreenshot() (creates a baseline on first run, compares on subsequent runs)
To install and run:


npm install
npx playwright install        # downloads Chromium, Firefox, WebKit (~300MB)
npm run test                  # run all tests headlessly
npm run test:ui               # open interactive Playwright UI (great for debugging)
npm run test:report           # open last test report in browser