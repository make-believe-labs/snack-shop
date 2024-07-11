import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SnacksController } from './snacks/snacks.controller';
import { OrdersController } from './orders/orders.controller';
import { OrdersModule } from './orders/orders.module';
import { SnacksModule } from './snacks/snacks.module';

@Module({
  imports: [OrdersModule, SnacksModule, ConfigModule.forRoot()],
  controllers: [AppController, OrdersController, SnacksController],
  providers: [AppService],
})
export class AppModule {}
