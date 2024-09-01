const superagent = require('superagent');
const { faker } = require('@faker-js/faker');
const numberOfOrdersToRaise = 2;
let healthy = false;

const snacksUrl = process.env.SNACK_API_ENDPOINT ? process.env.SNACK_API_ENDPOINT : "http://localhost:8080/api/snacks"
const ordersUrl = process.env.ORDERS_API_ENDPOINT ? process.env.ORDERS_API_ENDPOINT : "http://localhost:8080/api/orders"
const healthUrl = process.env.HEALTH_ENDPOINT ? process.env.HEALTH_ENDPOINT : "http://localhost:8080/actuator/health"

function makeOrder() {
    // affects all future faker.date.* calls
    faker.setDefaultRefDate('2024-09-01T00:00:00.000Z');
    return {
        "orderStatus": [
            {
                "status": "raised",
                "orderTime": faker.date.soon()
            },
            {
                "status": faker.helpers.arrayElement(['raised', 'paymentAccepted', 'paymentRejected', 'shipped', 'complete']),
                "orderTime": faker.date.soon()
            }
        ],
        "snacks": [
            {
                "snack": {
                    "timestamp": Math.floor(Date.now() / 1000),
                    "date": faker.date.soon()
                },
                "snackName": faker.helpers.arrayElement(['Creamy', 'Golden', 'Exquisite', 'Delicious', 'Snacktastic', 'Luxurious', 'Value']) + " " + faker.helpers.arrayElement(['Cake', 'Donut', 'Pudding', 'Pasty', 'Pie', 'Crisps', 'Chocolate', 'Mixed Nuts', 'Popcorn']),
                "qnt": faker.number.int({ min: 1, max: 10 }),
                "unitPrice": faker.number.int({ min: 100, max: 999 })
            },
            {
                "snack": {
                    "timestamp": Math.floor(Date.now() / 1000),
                    "date": faker.date.soon()
                },
                "snackName": faker.helpers.arrayElement(['Creamy', 'Golden', 'Exquisite', 'Delicious', 'Snacktastic', 'Luxurious', 'Value']) + " " + faker.helpers.arrayElement(['Cake', 'Donut', 'Pudding', 'Pasty', 'Pie', 'Crisps', 'Chocolate', 'Mixed Nuts', 'Popcorn']),
                "qnt": faker.number.int({ min: 1, max: 3 }),
                "unitPrice": faker.number.int({ min: 100, max: 999 })
            }
        ],
        "vat": faker.number.int({ min: 1, max: 10 }),
        "shippingCost": faker.number.int({ min: 199, max: 499 }),
        "orderTotal": faker.number.int({ min: 500, max: 25000 })
    }
}

function raiseOrder(order) {
    superagent.post(`${ordersUrl}`)
        .send(order)
        .then(res => console.log(res.body))
        .catch(console.error);
}

async function loadsOfOrders() {
    superagent.get(`${healthUrl}`)
        .then(res => {
            if (res.ok) {
                for (let i = 0; i < numberOfOrdersToRaise; i++) {
                    let orderToRaise = makeOrder();
                    raiseOrder(orderToRaise);
                    console.log(i)
                }
            }
        })
        .catch(console.error)
}

loadsOfOrders().then(console.log('yummy')).catch('disgusting')