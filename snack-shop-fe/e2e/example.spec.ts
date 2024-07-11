import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:9090');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Snack Shop/);
});

test('find a snack', async ({page}) => {
  await page.goto('http://localhost:9090');

  await page.getByTestId('668fd0aea1b649542815374e');
})
