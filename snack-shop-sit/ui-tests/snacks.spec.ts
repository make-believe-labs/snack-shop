import { test, expect } from '@playwright/test';

const snackShopUrl = 'https://lab.fullsnacktester.com'


test('test', async ({ page }) => {
// Example solution to Challenge 1: Update a test
// The reason the original test is broken, is because it's asserting based on old test data
// We either need to control the test data, or find a more generic way to do the assert.

// Solution 1: More generalized assertion
test('Snacks added on the homepage should be displayed in the basket page', async ({ page }) => {
    await page.goto(`${snackShopUrl}`);
    await page.getByTestId('storeSnack_0').getByRole('button', { name: 'Add' }).click();

    // Save the name of the first snack we add, so we can assert on it later.
    // We could instead control the inventory of snacks for the test.
    const snackName = await page.getByTestId('storeSnack_0').getByRole('heading').innerText();
    
    await page.getByTestId('storeSnack_1').getByRole('button', { name: 'Add' }).click();
    await page.getByTestId('storeSnack_2').getByRole('button', { name: 'Add' }).click();
    
    // Use regex to find te basket link, regardless of how many items added.
    // This could be improved, by adding a testId to the navigation links.
    await page.getByText(/^Basket/).click();

    // Assert that the Snack Name we captured from the first page, is in the basket.
    // We could go further and assert exactly the 3 snacks were added.
    await expect(page.getByText(snackName)).toBeVisible();
});