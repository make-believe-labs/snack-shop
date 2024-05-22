import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SnacksController } from './snacks/snacks.controller';
import { OrdersModule } from './orders/orders.module';
import { SnacksModule } from './snacks/snacks.module';

@Module({
  imports: [OrdersModule, SnacksModule],
  controllers: [AppController, SnacksController],
  providers: [AppService],
})
export class AppModule {}
