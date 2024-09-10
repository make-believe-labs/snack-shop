import { test, expect } from '@playwright/test';

// const snackShopUrl = 'http://localhost:9090'

// Uncomment if you're using the hosted version
const snackShopUrl = 'https://lab.fullsnacktester.com'

test('test', async ({ page }) => {
    await page.goto(`${snackShopUrl}/orders`);
    await expect(page.getByRole('heading', { name: 'Orders' })).toBeVisible();
});

// Solution to challenge 2
// There are many ways to control the test data for a web application.
// One option in PlayWright is to Mock API responses, as I have here.
// Other options include controlling the data via API and controlling the database directly.

test('Order headings are displayed', async ({ page }) => {
    // Mock the api call before navigating
    await page.route('*/**/api/orders', async route => {
        const json = [
            {
                "_id": "00snack1",
                "orderStatus": [
                    {
                        "status": "raised",
                        "orderTime": "2024-09-01T15:05:42.493Z"
                    }
                ],
                "snacks": [
                    {
                        "snack": {
                            "timestamp": 1725661782,
                            "date": "2024-09-06T22:29:42.000+00:00"
                        },
                        "snackName": "Mock Power Bar",
                        "qnt": 2,
                        "unitPrice": 125
                    },
                    {
                        "snack": {
                            "timestamp": 1725661782,
                            "date": "2024-09-06T22:29:42.000+00:00"
                        },
                        "snackName": "Mint TicTacs",
                        "qnt": 1,
                        "unitPrice": 198
                    }
                ],
                "vat": 7,
                "shippingCost": 259,
                "orderTotal": 2058
            }];
        await route.fulfill({ json });
    });

    await page.goto(`${snackShopUrl}/orders`);
    await expect(page.getByTestId('order_0')).toContainText('00snack1');
    await expect(page.getByTestId('order_0')).toContainText('Mock Power Bar');
    await expect(page.getByTestId('order_0')).toContainText('Mint TicTacs');
});