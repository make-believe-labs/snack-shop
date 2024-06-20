import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
    findAll(){
        const orders = [
          {
            _id: '9a4920f6-3297-41e9-a442-b8d4586b7ebe',
            orderStatus: [
              {
                status: 'raised',
                when: '2020-05-11T20:14:14.000Z',
              },
              {
                status: 'paymentAccepted',
                when: '2020-05-11T20:14:49.000Z',
              },
            ],
            snacks: [
              {
                snack: '9034b608-fa95-4ff5-9ed9-9d57cb472588',
                qnt: 2,
                unitPrice: 75,
              },
            ],
            vat: 30,
            shippingCost: 339,
            orderTotal: 579,
          },
        ];
        return orders;
    }
}
