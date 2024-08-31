import { test, expect } from '@playwright/test';

const snackShopUrl = 'http://localhost:9090'

test('has title', async ({ page }) => {
  await page.goto(`${snackShopUrl}`);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
