import { test, expect } from '@playwright/test';

const snackShopUrl = 'http://localhost:9090'

// Uncomment if you're using the hosted version
// const snackShopUrl = 'https://lab.fullsnacktester.com/'

test('test', async ({ page }) => {
    await page.goto(`${snackShopUrl}/orders`);
    await expect(page.getByRole('heading', { name: 'Orders' })).toBeVisible();
});