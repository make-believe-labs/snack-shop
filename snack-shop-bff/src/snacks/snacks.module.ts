import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SnacksController } from './snacks.controller';
import { SnacksService } from './snacks.service';

@Module({
  controllers: [SnacksController],
  imports: [HttpModule],
  providers: [SnacksService],
  exports: [SnacksService]
})
export class SnacksModule {}
