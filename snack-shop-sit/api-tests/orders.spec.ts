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