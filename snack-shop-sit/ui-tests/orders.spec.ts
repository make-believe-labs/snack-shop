import { test, expect } from '@playwright/test';

const snackShopUrl = 'http://localhost:9090'

// Uncomment if you're using the hosted version
// Note: You might want to use the hosted URL for Challenge 2 with the mocked response
// const snackShopUrl = 'https://lab.fullsnacktester.com/'

test('test', async ({ page }) => {
    await page.goto(`${snackShopUrl}/orders`);
    await expect(page.getByRole('heading', { name: 'Orders' })).toBeVisible();
});