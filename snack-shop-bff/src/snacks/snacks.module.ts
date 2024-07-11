import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SnacksController } from './snacks.controller';
import { SnacksService } from './snacks.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [SnacksController],
  imports: [ConfigModule, HttpModule],
  providers: [SnacksService],
  exports: [SnacksService],
})
export class SnacksModule {}
