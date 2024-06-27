const superagent = require('superagent');
const { faker } = require('@faker-js/faker');
const numberOfSnacksToStock = 10;

const url = "http://localhost:8080/api/snacks"

function makeSnack() {
    return {
        "snackName": faker.lorem.words({ min: 1, max: 3 }),
        "details": {
            "flavour": faker.lorem.words(1),
            "weight": faker.number.int({ min: 10, max: 999 }) + "g"
        },
        "categories": [
            faker.lorem.words(1),
            faker.lorem.words(1)
        ],
        "stock": faker.number.int({ min: 0, max: 10 }),
        "unitPrice": faker.number.int({ min: 50, max: 1000 })
    }
}

function stockSnack(snack) {
    superagent.post(`${url}`)
        .send(snack)
        .then(console.log)
        .catch(console.error);
}

for (let i = 0; i < numberOfSnacksToStock; i++) {
    let snackToStock = makeSnack();
    stockSnack(snackToStock);
}