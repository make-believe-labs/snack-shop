import { Module } from '@nestjs/common';
import { SnacksService } from './snacks.service';

@Module({
  providers: [SnacksService],
})
export class SnacksModule {}
