const superagent = require('superagent');
const { faker } = require('@faker-js/faker');
const numberOfSnacksToStock = 10;
let healthy = false;

const url = process.env.SNACK_API_ENDPOINT ? process.env.SNACK_API_ENDPOINT : "http://localhost:8080/api/snacks"
const health = process.env.HEALTH_ENDPOINT ? process.env.HEALTH_ENDPOINT : "http://localhost:8080/actuator/health"

function makeSnack() {
    return {
        "snackName": faker.helpers.arrayElement(['Creamy', 'Golden', 'Exquisite', 'Delicious', 'Snacktastic', 'Luxurious', 'Value']) + " " + faker.helpers.arrayElement(['Cake', 'Donut', 'Pudding', 'Pasty', 'Pie', 'Crisps', 'Chocolate', 'Mixed Nuts', 'Popcorn']),
        "details": {
            "flavour": faker.helpers.arrayElement(['Sweet', 'Savory', 'Umami', 'Sour', 'Spicy']),
            "weight": faker.number.int({ min: 10, max: 999 }) + "g"
        },
        "categories": [
            faker.helpers.arrayElement(['Best of British', 'Fresh Today', 'Great to Gift', 'Sale'])
        ],
        "stock": faker.number.int({ min: 0, max: 10 }),
        "unitPrice": faker.number.int({ min: 50, max: 1000 })
    }
}

function stockSnack(snack) {
    superagent.post(`${url}`)
        .send(snack)
        .then(res => console.log(res.body))
        .catch(console.error);
}

async function loadsOfSnacks() {
    superagent.get(`${health}`)
        .then(res => {
            if (res.ok) {
                for (let i = 0; i < numberOfSnacksToStock; i++) {
                    let snackToStock = makeSnack();
                    stockSnack(snackToStock);
                    console.log(i)
                }
            }
        })
        .catch(console.error)
}

loadsOfSnacks().then(console.log('yummy')).catch('disgusting')