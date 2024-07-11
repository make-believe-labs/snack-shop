import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { OrdersService } from './orders.service';
import { AxiosResponse } from 'axios';
import { of } from 'rxjs';

describe('OrdersService', () => {
  let orderService: OrdersService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, HttpModule],
      providers: [OrdersService],
    }).compile();

    orderService = module.get<OrdersService>(OrdersService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(orderService).toBeDefined();
  });

  describe('findAll', () => {
    describe('if orders exist', () => {
      it('should return all orders', () => {
        const response: AxiosResponse = {
          data: [
            { _id: 1, orderTotal: 100 },
            { _id: 2, orderTotal: 1234 },
          ],
          status: 200,
          statusText: 'OK',
          headers: {},
          config: {
            headers: undefined,
          },
        };
        const expectedResult = response.data;

        jest
          .spyOn(httpService, 'get')
          .mockImplementationOnce(() => of(response));

        return orderService.getOrders().then((result) => {
          expect(result).toBe(expectedResult);
        });
      });
    });

    describe('if no orders exist', () => {
      it('should return an empty array', () => {
        const response: AxiosResponse = {
          data: [],
          status: 200,
          statusText: 'OK',
          headers: {},
          config: {
            headers: undefined,
          },
        };
        const expectedResult = response.data;

        jest
          .spyOn(httpService, 'get')
          .mockImplementationOnce(() => of(response));

        return orderService.getOrders().then((result) => {
          expect(result).toBe(expectedResult);
        });
      });
    });
  });
});
