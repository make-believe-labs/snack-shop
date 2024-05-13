# Models

Proposed model for snacks and orders.

## Snacks Collection

```json
{
    _id: <ObjectId_Snack1>,
    snackName: "Tortilla Chips",
    detail: 
        {
            flavor: "Cheese",
            weight: "45g"
        },
    categories: [ "Savory", "Crisps" ],
    stock: 100,
    unitPrice: 90,
}
```

## Orders Collection

```json
{
    _id: <ObjectId_Order1>,
    orderStatus: [
        {
            status: "raised",
            when: "2020-05-11T20:14:14.000Z"
        },
        {
            status: "paymentAccepted",
            when: "2020-05-11T20:14:49.000Z"
        }
    ],
    snacks: [
        {
            snack: <ObjectId_Snack1>,
            qnt: 2,
            unitPrice: 75
        }
    ],
    vat: 30,
    shippingCost: 399,
    orderTotal: 579,
}
```
