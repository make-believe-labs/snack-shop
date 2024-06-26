import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  controllers: [OrdersController],
  imports: [HttpModule],
  providers: [OrdersService],
  exports: [OrdersService]
})
export class OrdersModule {}
