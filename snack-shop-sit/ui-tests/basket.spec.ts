import { test, expect } from '@playwright/test';

const snackShopUrl = 'http://localhost:9090'

test('test', async ({ page }) => {
    await page.goto(`${snackShopUrl}/basket`);
    await expect(page.getByRole('heading', { name: 'Basket' })).toBeVisible();
});