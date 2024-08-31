import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService){}

    @Get()
    async findAll(): Promise<any> {
        return this.ordersService.getOrders();
    }

    @Post()
    async createOrder(@Body() orderRequest): Promise<any> {
        return this.ordersService.createOrder(orderRequest);
    }
}
