# TestBash Brighton 2024: Code Challenges Workshop

## Challenge 2: Write a new test

### Scenario

The integration test coverage for the Snack Shop is still very low.

As demo day approaches, we need more tests to build confidence before we show the clients our hard work. Please, we need your help.

### Instructions

In this challenge you have a choice, you can either:

#### Option 1. Create a new UI Test using Playwright

Start with [ui-tests/orders.spec.ts](../../snack-shop-sit/ui-tests/orders.spec.ts).

With in the `orders.spec.ts` file, copy the existing test and paste it below the original.

Now give it a new name, something like 'Mocked order renders correctly'.

Now, we you can implement a mocked API request, read the Playwright docs for this:

<https://playwright.dev/docs/mock#mock-api-requests>

You might want to use an API client, or the network tab in dev tools in the browser, to look at the orders object so you can mock it accurately.

If you don't have an order in your local database, you can add one using the tool in [dev/raise_orders.js](../../dev/raise_orders.js) or simply visit <https://lab.fullsnacktester.com/api/orders> in the browser, or do a GET on that url in any API client, such as PostMan, Bruno or Yaak.

Once you create the mock, you can assert against absolute values, safe in the knowledge the order will consistently have the data you expect.

#### Option 2. Create a new API test, using SuperTest

Copy [api-tests/snacks.spec.ts](../../snack-shop-sit/api-tests/snacks.spec.ts) into a file and name it `orders.spec.ts`, make sure it is in the `api-tests` folder.

Switch out all instances of 'snacks' for 'orders'.

To run the API tests and make sure they are passing, run:

`npm run test:api`

Remember to give the test an appropriate name, and add some comments on what you might do given more time.

### [Optional] Side quests

Got some more time? Try one of these side quests:

- Do both the UI and API tests
- Extend the API test, to assert against the response
- Improve the UI test with by using a Page Object Model

### Solutions (spoiler alert!)

If you get stuck, feel free to peak, this is only one possible solution, you can also review after you done yours, to see what you did differently.

#### Solution: API

```JavaScript
import { describe, expect, test } from '@jest/globals';
import * as request from 'supertest'

// API based solution for Challenge 2

// const url = 'http://localhost:3000'
const url = 'https://lab.fullsnacktester.com/api'

// Basic copy of the snacks test, minimally sufficient to meet th brief
describe('Orders', () => {
    test('GET /orders should return OK', (done) => {
        request(url)
            .get('/orders')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });
});

// Go one further, and add a test that asserts against the response body
// This test assumes a payload from /orders, captured from the hosted url
//
// Given more time, I would implement a way to control the orders test data
// or I would assert on the structure, but not the absolute values.

describe('Orders', () => {
    test('GET orders returns expected orders', (done) => {
        request(url)
            .get('/orders')
            .expect(200,
                [
                    {
                        "_id": "66db82566f287d7db5a21ce0",
                        "orderStatus": [
                            {
                                "status": "raised",
                                "orderTime": "2024-09-01T15:05:42.493Z"
                            },
                            {
                                "status": "raised",
                                "orderTime": "2024-09-01T12:30:43.873Z"
                            }
                        ],
                        "snacks": [
                            {
                                "snack": {
                                    "timestamp": 1725661782,
                                    "date": "2024-09-06T22:29:42.000+00:00"
                                },
                                "snackName": "Exquisite Pasty",
                                "qnt": 6,
                                "unitPrice": 218
                            },
                            {
                                "snack": {
                                    "timestamp": 1725661782,
                                    "date": "2024-09-06T22:29:42.000+00:00"
                                },
                                "snackName": "Luxurious Pudding",
                                "qnt": 1,
                                "unitPrice": 198
                            }
                        ],
                        "vat": 7,
                        "shippingCost": 259,
                        "orderTotal": 20518
                    },
                    {
                        "_id": "66db82566f287d7db5a21cdf",
                        "orderStatus": [
                            {
                                "status": "raised",
                                "orderTime": "2024-09-01T01:25:39.289Z"
                            },
                            {
                                "status": "paymentRejected",
                                "orderTime": "2024-09-01T10:55:04.460Z"
                            }
                        ],
                        "snacks": [
                            {
                                "snack": {
                                    "timestamp": 1725661782,
                                    "date": "2024-09-06T22:29:42.000+00:00"
                                },
                                "snackName": "Golden Crisps",
                                "qnt": 4,
                                "unitPrice": 213
                            },
                            {
                                "snack": {
                                    "timestamp": 1725661782,
                                    "date": "2024-09-06T22:29:42.000+00:00"
                                },
                                "snackName": "Exquisite Pudding",
                                "qnt": 3,
                                "unitPrice": 401
                            }
                        ],
                        "vat": 3,
                        "shippingCost": 290,
                        "orderTotal": 3897
                    }
                ], done);
    });
});
```

<https://github.com/make-believe-labs/snack-shop/blob/test-bash-24-solutions/snack-shop-sit/api-tests/orders.spec.ts>

#### Solution: UI

Here's one I made earlier, this is one possible solution:

```JavaScript
// orders.spec.ts
import { test, expect } from '@playwright/test';

const snackShopUrl = 'https://lab.fullsnacktester.com'

// Solution to challenge 2
// There are many ways to control the test data for a web application.
// One option in PlayWright is to Mock API responses, as I have here.
// Other options include controlling the data via API and controlling the database directly.

test('Mocked order renders correctly', async ({ page }) => {
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
```

<https://github.com/make-believe-labs/snack-shop/blob/test-bash-24-solutions/snack-shop-sit/ui-tests/orders.spec.ts>
