import { test, expect } from '@playwright/test';

const snackShopUrl = 'http://localhost:9090'

test('test', async ({ page }) => {
    await page.goto(`${snackShopUrl}/orders`);
    await expect(page.getByRole('heading', { name: 'Orders' })).toBeVisible();
});