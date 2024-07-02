import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [OrdersController],
  imports: [ConfigModule, HttpModule],
  providers: [OrdersService],
  exports: [OrdersService]
})
export class OrdersModule {}
