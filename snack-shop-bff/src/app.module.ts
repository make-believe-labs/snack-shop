import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SnacksController } from './snacks/snacks.controller';

@Module({
  imports: [],
  controllers: [AppController, SnacksController],
  providers: [AppService],
})
export class AppModule {}
