import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

describe('OrdersController', () => {
  let orderController: OrdersController;
  let orderService: OrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      imports: [ConfigModule, HttpModule],
      providers: [OrdersService],
    }).compile();

    orderController = module.get<OrdersController>(OrdersController);
    orderService = module.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(orderController).toBeDefined();
    expect(orderService).toBeDefined();
  });

  describe('findAll', () => {
    describe('if orders exist', () => {
      it('should return all orders', () => {
        const expectedResult = [{'_id': 1, 'orderTotal': 100},{'_id': 2, 'orderTotal': 1234}];
        jest.spyOn(orderService, 'getOrders').mockResolvedValue(expectedResult);

        return orderController.findAll().then(result => {
          expect(result).toBe(expectedResult);
        });
      });
    });

    describe('if no orders exist', () => {
      it('should return an empty array', () => {
        const expectedResult = [];
        jest.spyOn(orderService, 'getOrders').mockResolvedValue(expectedResult);

        return orderController.findAll().then(result => {
          expect(result).toBe(expectedResult);
        });
      });
    });
  });
});
